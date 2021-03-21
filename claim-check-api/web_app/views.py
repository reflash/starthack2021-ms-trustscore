from datetime import datetime
from flask import Flask, jsonify, request
from . import app
import pandas as pd
import scipy
from sentence_transformers import SentenceTransformer
model = SentenceTransformer('bert-base-nli-mean-tokens')

def get_dataset():
    dataset_path = 'claim_data.tsv'
    return pd.read_csv(dataset_path, sep='\t')

def get_claims_data():
    dataset = get_dataset()
    # there's some unfiltered values in dataset that causes failures (take first 1000 for now)
    return dataset[:1000][['claim', 'explanation', 'label']]

# for caching
checked_claims_embeddings = None
def get_claims_embeddings(claims_data):
    global checked_claims_embeddings
    if checked_claims_embeddings is not None: return checked_claims_embeddings
    
    checked_claims_input = claims_data['claim'].tolist()
    checked_claims_embeddings = model.encode(checked_claims_input)
    return checked_claims_embeddings

# load on app init
checked_claims_embeddings = get_claims_embeddings(get_claims_data())

def get_answer_data(queries):
    claims_data = get_claims_data()
    claims_embeddings = get_claims_embeddings(claims_data)
    query_embeddings = model.encode(queries)
    
    answers = []
    for query, query_embedding in zip(queries, query_embeddings):
        distances = scipy.spatial.distance.cdist([query_embedding], checked_claims_embeddings, "cosine")[0]

        results = zip(range(len(distances)), distances)
        results = sorted(results, key=lambda x: x[1])
        idx, distance = results[0]
        score = 1-distance
        
        if score >= 0.83:
            answer = { 'explanation': claims_data.loc[idx]['explanation'], 'label': claims_data.loc[idx]['explanation'] }
        else:
            answer = { 'explanation': None, 'label': 'unidentified' }
        
        answers.append(answer)
    
    return answers

@app.route("/api/data", methods=['POST'])
def get_data():
    data = get_answer_data(request.json)
    return jsonify(data), 200

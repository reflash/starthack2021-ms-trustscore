import Telegraf from 'telegraf';
import axios from 'axios';

import express from 'express';

require('dotenv').config()

const bot = new Telegraf(""+process.env.BOT_TOKEN);

const helpMessage = `
Hi!
This bot is here to help you find out whether you can trust a medical text on the internet.
You provide a link to the text and we provide you a trust score along with untrustworthy claims.
We created a bot for simplicity reasons, ideally we see the implementation as a browser extension 
which will automatically analyze the pages that user visits.
`;

bot.start((ctx) => {
  ctx.reply(helpMessage);
});

bot.on('text', async (ctx) => {
  if (!ctx.message?.text) {
    ctx.reply('Access denied');
  }
  const inputText: string | undefined = ctx.message?.text;
  try {
    if (
      inputText &&
      (inputText?.startsWith('http://') ||
        inputText?.startsWith('https://'))
    ) {
      const res = await axios.post(
        `${process.env.BACKEND_API}`,
        { link: inputText },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      console.log("RESPONSE: ", res.data);

      ctx.reply(`The trustscore for the article is: ${res.data.score}`);

      res.data.claims.forEach((cl: any)=> {
        console.log("claim=", cl);
        if (cl.label == "false") {
          ctx.reply(`FAKE claim: ${cl.original_text}`);
          ctx.reply(`EXPLANATION: ${cl.explanation}`);
        }
      });
    } else {
      ctx.reply('Please enter a valid url');
    }
  } catch (e) {
    console.log("Error:", e);
    ctx.reply("Couldn't find any info in this website");
  }
});

bot.launch();
const app: express.Express = express();
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));

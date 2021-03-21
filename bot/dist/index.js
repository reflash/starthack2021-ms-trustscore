"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = __importDefault(require("telegraf"));
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
const bot = new telegraf_1.default("" + process.env.BOT_TOKEN);
const helpMessage = `
Hi everyone!
This bot is made to simplify your life! 
Just send us the link of the article and we will make it so much simpler!
`;
bot.start((ctx) => {
    ctx.reply(helpMessage);
});
bot.on('text', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text)) {
        ctx.reply('Access denied');
    }
    const inputText = (_b = ctx.message) === null || _b === void 0 ? void 0 : _b.text;
    try {
        if (inputText &&
            ((inputText === null || inputText === void 0 ? void 0 : inputText.startsWith('http://')) ||
                (inputText === null || inputText === void 0 ? void 0 : inputText.startsWith('https://')))) {
            const res = yield axios_1.default.post(`${process.env.BACKEND_API}`, { link: inputText }, {
                headers: {
                    'Content-type': 'application/json',
                },
            });
            ctx.reply(res.data.slice(0, 2000));
        }
        else {
            ctx.reply('Please enter a valid url');
        }
    }
    catch (e) {
        console.log("Error:", e);
        ctx.reply("Couldn't find any info in this website");
    }
}));
bot.launch();

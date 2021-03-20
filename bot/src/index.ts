import Telegraf from 'telegraf';

const bot = new Telegraf('1631967097:AAGIxpszi8lq3IM9K8BoWrRiHTm0p9mXnBY');

const helpMessage = `
Hi everyone!
This bot is made to simplify your life! 
Just send us the link of the article and we will make it so much simpler!
`;

bot.start((ctx) => {
  ctx.reply(helpMessage);
});

bot.on('text', (ctx) => {
  ctx.reply('as');
});

bot.launch();

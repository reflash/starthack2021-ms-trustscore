import Telegraf from 'telegraf';
import axios from 'axios';

require('dotenv').config()

const bot = new Telegraf(""+process.env.BOT_TOKEN);

const helpMessage = `
Hi everyone!
This bot is made to simplify your life! 
Just send us the link of the article and we will make it so much simpler!
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
      ctx.reply(res.data.slice(0, 2000));
    } else {
      ctx.reply('Please enter a valid url');
    }
  } catch (e) {
    console.log("Error:", e);
    ctx.reply("Couldn't find any info in this website");
  }
});

bot.launch();

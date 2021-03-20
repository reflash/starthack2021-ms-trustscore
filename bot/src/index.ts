import Telegraf from 'telegraf';
import axios from 'axios';
const bot = new Telegraf('1631967097:AAGIxpszi8lq3IM9K8BoWrRiHTm0p9mXnBY');

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
      (inputText?.startsWith('http://www.') ||
        inputText?.startsWith('https://www.'))
    ) {
      const res = await axios.post(
        'http://localhost:5000/api/text',
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
    ctx.reply("Couldn't find any info in this website");
  }
});

bot.launch();

// import bot token from .env file

const TOKEN = require('dotenv').config();

// import discord.js module
const {Client, GatewayIntentBits, TextChannel, Message, Partials} = require('discord.js');

// import openai module, key, new config
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);

// configure Discord bot permissions(intents)
const client = new Client({intents: 
	[
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.DirectMessageTyping, 
	GatewayIntentBits.DirectMessageReactions,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildEmojisAndStickers,
	GatewayIntentBits.GuildWebhooks,
	GatewayIntentBits.GuildMessageReactions,
	GatewayIntentBits.GuildMessageTyping, 
	GatewayIntentBits.GuildScheduledEvents,
	],

	'partials': [Partials.Channel]
});

// console log bot startup
// 當機器人成功登入時觸發此中斷函數
client.on('ready', () => {
	client.user.setActivity('貝斯');
	console.log(`I'M ALIVE!! LOGGED IN AS ${client.user.tag}`);
});


// function returns AI response every time text is sent to server
// 當機器人可視文字頻道收到訊息時執行此中斷函數
client.on('messageCreate', async function (message) {
	
	// 設定區域變數botTag用以判斷機器人是否被提及
	const botTag = `<@${client.user.id}>`;
	
	// 如果發話者是機器人自己則無視此訊息
	if (message.author.id === client.user.id) return;

	// 若訊息無提及此機器人則無視訊息

	if (!message.content.startsWith(`<@${client.user.id}>`) && (!message.author.bot)) return;

	// 若訊息有提及此機器人則執行
	if (message.content.includes(botTag)){
		// 向訊息來源的文字頻道傳送此機器人正在打字的訊息
	    await message.channel.sendTyping();

    try {
        // ignore input from the bot itself


        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[
                {"role": "system", "content": "（輸入你想要訓練機器人的內容）" },
				{"role": "user", "content": "（輸入對話 例：你想要吃什麼？）"},
                {"role": "assistant", "content": "（輸入機器人回答的語氣 例：都可以哦。）"},
				{"role": "user", "content": "（輸入對話）"},
                {"role": "assistant", "content": "（輸入機器人回答的語氣）"},
                {"role": "user", "content": `${message.content}`}
        ]});
        message.reply(`${completion.data.choices[0].message.content}`);
			}   
		catch (error) {
			console.log(error);
			}

		} 
	
	
});
// use token from env file to log in

client.login(process.env.TOKEN);
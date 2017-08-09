const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
	console.log("The Bot is on!");
});

client.on("guildMemberAdd", member => {
	let guild = member.guild;
	guild.defaultChannel.send(`Welcome ${member.user} to Canada KOF discord`);
});

client.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(config.prefix)) return;
	
	let command  = message.content.split(" ") [0];
	command = command.slice(config.prefix.length);

	let args = message.content.split(" ").slice(1);

	//commands bot to give the results of two numbers being added
	if (command === 'add'){
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce((p,c) => p+c);
		message.channel.send(total);
	}

	if (command === 'say'){
		message.channel.send(args.join(" "));
	}

	if (command === 'ping'){
		message.channel.send('pong');
	}

	if (command === 'foo'){
		message.channel.send('bar');
	}
	
	if (command === 'fd'){
	    	message.channel.send('Frame-Data HERE!!!');
	}

});


client.login(config.token);

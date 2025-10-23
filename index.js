const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()

const { Client, CustomStatus, RichPresence, getUUID } = require('discord.js-selfbot-v13');

const client = new Client();

client.on("ready", async () => {
	console.log(`✅ ${client.user.username} Started Online`);
  client.user.setHypeSquad('HOUSE_BRILLIANCE');
  client.user.setPresence({ activities: [r],});
	const {joinVoiceChannel} = require('@discordjs/voice');
	const channel = client.channels.cache.get("1309115764476739627"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: true,
				selfMute: true,
			});
		  }, 6000)
		});   
    
const r = new RichPresence() 
	.setApplicationId('1354631077045473324')
	.setType('PLAYING')
	.setURL('https://guns.lol/24kpablo')
	.setState('PlayStation 5')
	.setName('EA Sports FC 26')
	.setDetails('Manager Career')
	.setParty({
		max: 5,
		current: 3,
		id: getUUID(),
	})
	.setStartTimestamp(Date.now())
	.setAssetsLargeImage('https://cdn.discordapp.com/attachments/1430509792497242232/1430682876340469852/2e757ffb0a6bb4b91af84db64e0183d725e56e5354f45eba.png?ex=68faaac2&is=68f95942&hm=765b9b4cf4cb7a5d0f1cf97d2e325286bc06173afc84e520831c85b9f83a08d8&')
	.setAssetsLargeText('EA Sports FC 26 (Standard Edition)')
	.addButton('Gun.LoL', 'https://guns.lol/24kpablo')

client.login(process.env.TOKEN)

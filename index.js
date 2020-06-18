const Discord = require('discord.js');
const bot = new Discord.Client();
var version = '0.420.69'
const PREFIX = ';';

bot.on('ready', () => {
    console.log('Slurp Bot is now online!');
})

bot.on('message', message => {

    let args = message.content.toLowerCase().substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(';')) return;

    switch (args[0]) {
        case 'website':
            message.channel.send('https://www.coolmathgames.com/')
            message.channel.send('https://www.pornhub.com/')
            message.channel.send('https://www.hanime.tv/')
            break;

        case 'version':
            message.channel.send('Version ' + version);
            break;

        case 'prefix':
            message.channel.send(PREFIX)
            break;

        case 'purge':
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            if (!args[1]) return message.channel.send('Please send an amount of messages to delete!')
            message.channel.bulkDelete(args[1]);
            message.channel.send(args[1] + ' messages have been deleted!')
            break;

        case 'kick':
            if (!message.member.hasPermission("KICK_MEMBERS", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);

                if (member) {
                    member.kick('You have been kicked from this server!').then(() => {
                        message.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err => {
                        message.channel.send('I was unable to kick the member :(');
                        console.log(err);
                    });
                } else {
                    message.reply('That person is not in the server!')
                }
            } else {
                message.channel.send('You need to specify a person!');
            }
            break;

        case 'ban':
            if (!message.member.hasPermission("BAN_MEMBERS", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);

                if (member) {
                   member.ban({reason: 'You have been banned from this Discord server!'}).then(() =>{
                        message.channel.send(`Successfully banned ${user.tag}`);
                   }).catch(err => {
                       message.channel.send('I was unable to ban the member :(');
                       console.log(err);
                   });
                } else {
                    message.reply('That person is not in the server!')
                }
            } else {
                message.channel.send('You need to specify a person!');
            }
            break;
        
        case 'creator':
            message.channel.send('Hi, I am Slurpity. I made Slurp-Bot because I was bored lol. Add me! Slurpity#4020');
            break;
            
        case 'ching':
            if (!message.member.hasPermission("EMBED_LINKS", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            message.channel.send('Chong!');
            break;

        case 'merkthebeaner':
            if (!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            message.channel.send('Noah the beaner has been merked!')
            break;
        
        case 'darrinthesexy':
            if (!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('You do not have permission to execute this command!')
            message.channel.send('**Darrin is the most sexy man alive - hasn**')
            break;

        case 'arkham':
            var embed = new Discord.MessageEmbed()
            .setTitle('Arkham Network')
            .addField('IP', 'ArkhamNetwork.org')
            .addField('Discord', 'https://discord.gg/gjup9KF')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
        
        case 'help':
            var embed = new Discord.MessageEmbed()
            .setTitle('Slurp Bot Commands')
            .addField(';ching', 'Chong!')
            .addField(';purge', 'Deletes *x* amount of messages')
            .addField(';kick', 'Kicks people')
            .addField(';ban', 'Bans people')
            .addField(';creator', 'Shows info about yours truly')
            .addField(';arkham', 'Shows info about ArkhamNetwork')
            .setColor(0x77DDDD)
            message.channel.send(embed);
            break;
        
        case 'bj':
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send("No one wants your fatass to suck their dick")
            if (!args[1]) return message.channel.send(`Who's dick do you want to suck?`)
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);
                if (member) {
                    message.channel.send(`You just sucked ${user}'s dick... hoe`)
                    };
            }
            break;

        case 'peg':
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send("No one wants your tiny dick in their ass")
            if (!args[1]) return message.channel.send(`Who do you want to fuck in the ass?`)
            var author = message.author;
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);
                if (member) {
                    message.channel.send(`${user} has been **fucked** in the ass by ${author}... Oh shit it's pretty damn bloody!`)
                    };
            }
            break;

        case 'cumshot':
            if (!message.member.hasPermission("MANAGE_MESSAGES", explicit = true)) return message.channel.send("Your cumshots are weak as hell")
            if (!args[1]) return message.channel.send(`Who do you want to cum all over?`)
            var author = message.author;
            var user = message.mentions.users.first();
            if (user) {
                var member = message.guild.member(user);
                if (member) {
                    message.channel.send(`${user} got covered in hot sticky **cum**! **"WHAT ARE YOU DOING STEP BRO!?"** They yell at ${author} as he pulls up his cum-covered pants and walks away...`)
                    };
            }
            break;
    }
})

bot.login(process.env.BOT_TOKEN);

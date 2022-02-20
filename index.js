const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {
   if(message.content == "pizza") {
       message.channel.send("La pizza è buona senza l'ananas")
   }

   if(message.content == "stipendio"){
       message.channel.send("Killer devi dare lo stipendio")
   }
})
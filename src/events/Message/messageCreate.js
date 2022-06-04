const { Client, Message, MessageEmbed, Collection } = require('discord.js')

module.exports = {
  name: "messageCreate",

  /**
   * @param { Client } client
   * @param { Message } message
  */

  async execute(message, client) {
    if (!message.content.startsWith(client.configs.PREFIX) || message.author.bot) return;

    const args = message.content.slice(client.configs.PREFIX.length).trim().split(/ +/)

    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) ||
      client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

    if (!command) return;


    if (command.permissions) {
      const authorPerms = message.channel.permissionsFor(message.author)

      if (!authorPerms || authorPerms.has(command.permissions)) {
        message.delete()
        const NoPermsEmbed = new MessageEmbed()
          .setColor('RED')
          .setDescription('Você não possui permissão para utilizar este comando!')
        return message.channel.send({ embeds: [NoPermsEmbed] }).then((send) => { setTimeout(() => { send.delete() }, 2000) })
      }
    }
    const { cooldowns } = client


    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection())
    }

    const now = Date.now()
    const timestamps = cooldowns.get(command.name)
    const cooldownAmount = (command.cooldown || 1) * 1000

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000

        const timeLeftEmbed = new MessageEmbed()
          .setColor('RED')
          .setDescription(`Aguarde ${timeLeft.toFixed(1)} segundos para poder utilizar este comando novamente!`)
        return message.channel.send({ embeds: [timeLeftEmbed] }).then((send) => { setTimeout(() => { send.delete() }, 2000) })
      }
    }

    timestamps.set(message.author.id, now)
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

    try {
      command.execute(client, message)
    } catch (err) {
      console.log(err);
    }

  }

}
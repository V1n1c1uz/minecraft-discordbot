const { readdirSync } = require('fs')

module.exports = (client) => {
  const commmandFolders = readdirSync('./src/commands')

  for (const folder of commmandFolders) {
    const commandFiles = readdirSync(`./src/commands/${folder}`).filter(files => files.endsWith('.js'))

    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`)
      client.commands.set(command.name, command)
    }

  }

}
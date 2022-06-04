const { api } = require('../../shared/service/api')

module.exports = {
  name: 'serverstatus',
  aliases: ['status', 'mcstatus'],
  description: 'See the status of a Minecraft server',
  async execute(client, message) {
    try {

      const { SERVER_IP, SERVER_PORT } = client.configs

      const messageWait = await message.reply({ content: `Aguarde...` })

      const response = await api.get(`/${SERVER_IP}:${SERVER_PORT}`)

      const data = response.data

      if (!data.online) return message.reply({ content: `O Servidor está offline no momento.` })

      message.reply({ content: `Servidor online com ${data.players.Onplayers}/${data.players.Maxplayers} players online.` })

      return messageWait.delete()

    } catch (err) {
      return message.reply({ content: `Não foi possivel executar este comando, tente novamente mais tarde.` })
    }

  }
}
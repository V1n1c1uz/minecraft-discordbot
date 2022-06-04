module.exports = {
  name: "ready",
  execute(client) {
    console.log(`Bot iniciado com sucesso em ${client.guilds.cache.size} servidor(es)!`)
  }
}
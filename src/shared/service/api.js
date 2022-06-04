const axios = require('axios')

exports.api = axios.create({
  baseURL: process.env.MCSTATSAPI
})
'use strict'

const path = require('path')
const jwt = require('@fastify/jwt')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(jwt, {
    secret: 'test',
  })

  fastify.register(jwt, {
    secret: 'test',
    namespace: 'security',
    jwtVerify: 'securityVerify',
    jwtSign: 'securitySign'
  })

  fastify.register(jwt, {
    secret: 'fastify',
    namespace: 'airDrop'
  })


  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
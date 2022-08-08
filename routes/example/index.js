'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // It's OK
    return {token: fastify.jwt.sign({'foo': 'bar'})} // => {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NTk5NjE2Njd9.0XC8as_HE284cUyz17hUfmNMWjskasLALDxyn_WERfU"}

    // doesn't work
    // return {token: reply.securitySign({'foo': 'bar'})} // => {"token":{}}
  })
}

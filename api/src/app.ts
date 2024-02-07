import Fastify, { FastifyRequest, FastifyReply } from 'fastify'

const app = Fastify()

app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
  return reply.send({ message: 'Hello World!' })
})

app.listen({ port: 3333 }, () => console.log('Server is running'))
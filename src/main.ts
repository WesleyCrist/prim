import { Elysia } from 'elysia'
import grouping from './routes/grouping'

const app = new Elysia()
    .use(grouping)
    .listen(Number(process.env.PORT))

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

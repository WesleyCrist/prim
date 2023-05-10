import Elysia from "elysia"

const init = (app: Elysia) => app
    .get('/', async ({ set }) => {
        set.status = 200
        return {
            statusCode: 200,
            statusApplication: 'ok'
        }
    })

export default init

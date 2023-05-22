import Elysia from "elysia"

const none = (app: Elysia) => app
    .onError(({ code, error, set }) => {
        if(code === 'NOT_FOUND') {
            set.status = 404
            return {
                statusCode: 404,
                statusApplication: 'Page not found'
            }
        }
    })

export default none

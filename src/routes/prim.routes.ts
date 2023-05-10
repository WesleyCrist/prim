import Elysia from "elysia"
import Calc from "../functions/Calc"

const empty = {
    statusCode: 406,
    msg: 'number not informed'
}

const prim = (app: Elysia) => app
    .get('/prim/:num', async ({ params: { num }, set }) => {
        if(num === '') {
            set.status = empty.statusCode
            return empty
        } else {
            const tmp = Number(num)
            if(!isNaN(tmp)) {
                try {
                    return await Calc.check(tmp)
                } catch(err: any) {
                    set.status = 412
                    return {
                        statusCode: 412,
                        msg: err.message
                    }
                }
            } else {
                set.status = 412
                return {
                    statusCode: 412,
                    msg: 'only numbers'
                }
            }
        }
    })
    .get('/prim', ({ set }) => {
        set.status = empty.statusCode
            return empty
    })

export default prim

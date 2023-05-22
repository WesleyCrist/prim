import Elysia from "elysia"
import init from "./init.routes"
import prim from "./prim.routes"
import none from "./none.routes"

const grouping = (app: Elysia) => app
    .use(init)
    .use(prim)
    .use(none)

export default grouping

import Elysia from "elysia"
import init from "./init.routes"
import prim from "./prim.routes"

const grouping = (app: Elysia) => app
    .use(init)
    .use(prim)

export default grouping

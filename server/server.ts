import Express from 'express'
import { baseMiddlewares } from './middleware/server/base';
import { PORT } from './constants/server.consts'
import { notFound, errorHandler } from './middleware/server/errorHandlers'
import { Model } from 'objection';
import connection from "./api/db";

const app = Express()
declare global {
    namespace Express {
        interface Request {
            user: {}
        }
    }
}



Model.knex(connection);


// ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
baseMiddlewares(app)

//  ─── API ──────────────────────────────────────────────────────────────────────
import api from "./api/api.index"
app.use('/api', api)




app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.info("running http://localhost:" + PORT)
});

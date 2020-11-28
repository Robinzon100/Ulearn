import Express, { Application, Request, Response, NextFunction } from 'express'
import { baseMiddlewares } from './middleware/server/base';
import { PORT } from './constants/server.consts'
import { notFound, errorHandler } from './middleware/server/errorHandlers'
import { Model } from 'objection';
import connection from "./api/db";

const app = Express()
Model.knex(connection);


 
// ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
baseMiddlewares(app)

//  ─── API ──────────────────────────────────────────────────────────────────────
import api from "./api"
app.use('/api', api)







app.use(notFound)
app.use(errorHandler)



app.listen(PORT, () => {
    console.info("running http://localhost:" + PORT)
});

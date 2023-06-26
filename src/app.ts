import express, { Application, urlencoded } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { userRoutes } from './app/modules/user/user.route';

const app:Application = express();

app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))

app.use('/api/v1/users', userRoutes)
app.use(globalErrorHandler)

export default app;


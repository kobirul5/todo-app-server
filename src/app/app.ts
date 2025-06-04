import express, { Request, Response } from "express"
import fs from "fs"
import path from "path"
import { todosRouter } from "./todos/todos.router"
const app = express()
app.use(express.json())


app.use("/todos", todosRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To ToDos Apps')
})



export default app;

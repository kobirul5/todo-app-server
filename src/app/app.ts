import express, { Request, Response } from "express"
import fs from "fs"
import path from "path"
const app = express()
app.use(express.json())

const filePath = path.join(__dirname, "../../db/todo.json")

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome To ToDos Apps')
})

app.get('/todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, {encoding:"utf-8"})
  res.send(data)
})
app.post('/todos/create-todo', (req: Request, res: Response) => {
  const {title, body} = req.body
  console.log(title,",,,,,", body)
  res.send("done")
})

export default app;

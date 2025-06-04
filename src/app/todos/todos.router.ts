import express, { Request, Response } from "express"
import { client } from "../../config/mongodb"

export const todosRouter = express.Router()



todosRouter.get('/',async (req: Request, res: Response) => {
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    await collection.insertOne({
        title: "mongo DB",
        description: "Learning Mongo DB",
        priority: "high",
        isCompleted: false
    })
    const cursor = collection.find({})
    const todos = await cursor.toArray()

    res.json(todos)
})
todosRouter.post('/create-todo', (req: Request, res: Response) => {
    const { title, body } = req.body
    console.log(title, ",,,,,", body)
    res.send("done")
})
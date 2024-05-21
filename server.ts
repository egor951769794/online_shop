// const express = require('express')

import express from 'express'


import { User } from './src/data/Users'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())


const users: User[] = [
    {
        login: 'test',
        password: 'test',
        cart: []
    }
]


app.get('/users', (req: Request, res: Response) => {
    res.json(users)
})

app.post('/users', (req: Request, res: Response) => {
    const user : User = { login: req.body.login, password: req.body.password, cart: [] }
    users.push(user)
    res.status(201).send()
})


app.listen(3001)
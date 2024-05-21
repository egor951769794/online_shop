// const express = require('express')

import express from 'express'


import { User } from './src/data/Users'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });


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
    console.log(req.body)
    const user : User = { login: req.body.login, password: req.body.password, cart: [] }
    users.push(user)
    res.status(201).send()
})


app.listen(3001)
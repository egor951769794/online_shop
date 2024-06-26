import express from 'express'
import { User } from './src/data/Users'
import { Request, Response } from 'express'
import { hash, compare } from 'bcrypt'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const handleUserId = (users: User[]) => {
    return Number(!(users.length)) || Math.max(...users.map((user) => user.id)) + 1
}

var users: User[] = [] 


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Expose-Headers', 'user');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });


app.get('/users', (req: Request, res: Response) => {
    res.json(users)
})

app.post('/users', async (req: Request, res: Response) => {
    if (users.find(user => user.login === req.body.login)) return res.status(400).send('Такой пользователь уже существует')
    try {
        const hashPassword = await hash(req.body.password, 8)
        const user : User = { id: handleUserId(users), login: req.body.login, password: hashPassword, cart: [], orders: [] }
        users.push(user)
    } catch(err) {
        res.status(500).send()
        console.log(err)
    }

    res.status(201).send()
})

app.post('/users/login', async(req: Request, res: Response) => {
    const user = users.find(user => user.login === req.body.login)
    if (user == null) return res.status(400).send('Неверный логин')
    try {
        if (await compare(req.body.password, user.password)) res.set('user', JSON.stringify(user)).send(true) //костыль
        else res.status(400).send('Неверный пароль')
    } catch(err) {
        console.log(err)
    }
})

app.get("/fetchUser/:id", async(req: Request, res: Response) => {
    const user = users.find(user => user.id.toString() === req.params.id)
    if (user == null) {return res.status(404).send('Пользователя не существует')}
    res.json(user)
})

app.post('/users/:id/addToCart', async(req: Request, res: Response) => {
    const user = users.find(user => user.id.toString() === req.params.id)
    if (user == null) {return res.status(404).send('Пользователя не существует')}
    if (!req.body.item) return res.status(404).send('Товара не существует')
    user.cart.push(Number(req.body.item.itemId))
    res.json(user)
})

app.post('/users/:id/removeFromCart', async(req: Request, res: Response) => {
    const user = users.find(user => user.id.toString() === req.params.id)
    if (user == null) {return res.status(404).send('Пользователя не существует')}
    if (!req.body.item) return res.status(404).send('Товара не существует')
    const i = user.cart.indexOf(Number(req.body.item.itemId))
    user.cart.splice(i, 1)
    res.json(user)
})

app.listen(3001)

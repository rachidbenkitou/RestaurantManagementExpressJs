const express = require("express")
const dotenv = require("dotenv")
const prisma= require("./db/prisma")

dotenv.config()
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    await prisma.user.create({
        data: {
            name: "John Doe",
            email: "jondoe@gmail.com",
            password: "123456"
        }
    });

    const users = await prisma.user.findMany()
    const names = users.map((user) => user.name)

    res.send(
        `There are ${names.length} users with the names of ${names.join(", ")}`
    )

});

app.listen(port, () => console.log(`App listening on port ${port}`))

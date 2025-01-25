import express from "express"

const app = express()

app.get("/test", (req, res)=>{
    const mySecrtKey = process.env.HANNAN
    res.json({secretKey: mySecrtKey})
})

app.listen("3000", () => console.log(`Server is running on Port 3000`));
import express from "express"
import router from  './src/router/routerfilme.js'
const app = express();
app.use(express.json())

app.use("/api", router)

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})
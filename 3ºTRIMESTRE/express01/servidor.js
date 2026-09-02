// importação moderna com ESM (import)
import express from 'express'

const app = express() // Instanciar Express

app.get('/', (req, res) => {
    res.send(`
        <h3>Página Inicial</h3>\n
        <p>Loja especialista em roupas</p>`)
})
app.get('/roupa', (req, res) => {
    res.send('roupa de sair...!')
})

app.listen(3001, ()=> {console.log('Servidor está vivo!')})
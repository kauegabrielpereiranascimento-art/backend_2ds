// importação moderna com ESM (import)
import express from 'expres'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})
app.get('/roupa', (req, res) => {
    res.send('Minha roupa de sair...!')
})

app.listen(3000, ()=> {console.log('Servidor esrá vivo!')})
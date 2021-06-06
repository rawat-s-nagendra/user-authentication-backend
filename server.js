import express from 'express';
const app = express();



app.get('/', (req, res) => { res.send('Hello There!') })

const port = process.env.PORT || '8081'
app.listen(port, () => console.log(`litening on port ${port}`))
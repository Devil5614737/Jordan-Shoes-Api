import express from 'express'
import cors from 'cors'
import {data} from './data'
const app=express();



app.use(cors())


app.use(express.json())

app.get('/shoes',(req,res)=>{
return   res.status(200).json(data)
})

app.get('/shoes/:id',(req,res)=>{
    const shoeId=req.params.id.toString();
    const shoe=data.find(shoe=>shoe.id.toString()===shoeId)
    return res.status(200).json(shoe)
})

app.listen(4000,()=>{
    console.log('Listening on port 4000')
})
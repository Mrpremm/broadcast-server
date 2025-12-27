const express=require('express');
const cors=require('cors');
const {Server}=require('socket.io');

const app=express();
app.use(cors());
app.use(express.json());

app.get("/health",(req,res)=>{
  res.json({status:"OK"});
})

const http=require('http');
const server=http.createServer(app);
const io=new Server(server,{
  cors:{
    origin:"*",
  },
});

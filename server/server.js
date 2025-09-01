import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import { clerkMiddleware , requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js ';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json()); // express.json() is built in middleware that helps to parse incomming json data from client and after parsing data is available in req.body
app.use(clerkMiddleware()); // clerkmiddleware checks for Bearer token in Authorization header and verifies it with clerk server , if valid then attach auth object with request object.



app.use(requireAuth())// To protect your routes, use the requireAuth() middleware. This middleware functions similarly to clerkMiddleware(), but also protects your routes by redirecting unauthenticated users to the sign-in page.


app.get('/', (req,res)=>{
    res.send('Server is Live!')
})

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT ,() =>{
    console.log(`Server is running on port : ${PORT}`)
})

 
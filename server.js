import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"


console.log("JWT:", process.env.JWT_SECRET)

console.log("STRIPE:", process.env.STRIPE_SECRET_KEY)
// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://doctor-frontend-sand.vercel.app"
  ],
  credentials: true
}));
//so this is for cors code ok

app.use(express.json())


// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

console.log("Cors fix Applied");

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))
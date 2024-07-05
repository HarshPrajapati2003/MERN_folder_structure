import express from "express"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import session from "express-session"
import MongoStore from "connect-mongo"
const app=express()
const PORT = process.env.PORT || 5000
dotenv.config();
connectDB()

// CORS configuration
app.use(cors());
app.use(express.json())
app.use(cookieParser());

// Session configuration
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// routes
app.use("/api/auth", authRoutes) //🛑 all api route must be starts with "/api" 🛑

// ----------------  Localhost --------------------

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// ----------------  Localhost --------------------

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
})
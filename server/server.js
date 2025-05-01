import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";


import { connectDB } from "./lib/db.js";

import cors from "cors";


dotenv.config();

const allowedOrigins = [
    "http://localhost:5173", // Vite default port
    "https://modanova-client.vercel.app" // عنوان الواجهة على Render
];


const app = express();

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(express.json({ limit: "10mb" })); // allow you to parse the body of the request
app.use(cookieParser());




const PORT = process.env.PORT || 5001;


//authentication
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);

    connectDB();
});
"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { ToastContainer, toast } from 'react-toastify';

export const initiatePayment = async (amount, to_username, paymentform) => {
    await connectDB()
    let user = await User.findOne({username: to_username});
    const razorpaySecret = user?.razorpaysecret;
    const razorpayKey = user?.razorpayid;

    const instance = new Razorpay({
        key_id: razorpayKey,
        key_secret: razorpaySecret,
    })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let order = await instance.orders.create(options)
    await Payment.create({
        amount: amount / 100,
        order_id: order.id,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })
    return order
}

export const fetchuser = async (username) => {
    await connectDB()
    const user = await User.findOne({ username: username }).lean()
    if (!user) return null
    return {
        ...user,
        _id: user._id.toString(),
        createdAt: user.createdAt?.toISOString(),
        updatedAt: user.updatedAt?.toISOString()
    }
}

export const fetchPayments = async (username) => {
    await connectDB()
    let payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return payments.map(p => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString()
    }))
}

export const updateProfile = async (oldusername, data) => {
    await connectDB()
    let ndata = data
    // Check if the new username already exists
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            throw new Error("Username already exists")
        }
        await User.updateOne({email: ndata.email }, ndata)
        // Now update all the usernames in the Payments nad User collection 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        await User.updateMany({username: oldusername}, {username: ndata.username})
    } else {
        await User.updateOne({email: ndata.email }, ndata)
    }
} 
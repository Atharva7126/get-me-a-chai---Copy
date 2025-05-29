import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    // check if razorpayOrderId is present on the server
    let p = await Payment.findOne({ order_id: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
    }

    // fetch the razorpay secret of the user who is getting the payment
    let user = await User.findOne({username: p.to_user});
    const razorpaySecret = user?.razorpaysecret;

    // verify the payment signature
    let isValid = validatePaymentVerification(
        {
            "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id
        },
        body.razorpay_signature
        ,razorpaySecret
    );
    
    if (isValid) {
        const updatePayment = await Payment.findOneAndUpdate(
            { order_id: body.razorpay_order_id },
            { done: true },
            { updateAt: Date.now() },
            { new: true }
        );
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?success=true`)
    } else {
        return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
    }

}

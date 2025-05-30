"use client"
import { React, useEffect, useState } from 'react'
import Script from 'next/script'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { initiatePayment, fetchPayments, fetchuser } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentuser, setCurrentuser] = useState({})
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("success") == "true") {
            toast.success("Payment successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce
            });
        }
        if (username) {
            router.push(`/${username}`);
        }
    }, [searchParams, router, username])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        setLoading(true)
        const [u, p] = await Promise.all([
            fetchuser(username),
            fetchPayments(username)
        ])
        setCurrentuser(u)
        setPayments(p)
        setLoading(false)
    }

    const pay = async (amount) => {
        // if done is true then return
        let a = await initiatePayment(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GetMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://cdn-icons-png.flaticon.com/512/3504/3504837.png", //This is the logo that will be displayed on the payment page
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <style jsx>{`
                /* Custom scrollbar styles for supporters list */
                .supporters ul::-webkit-scrollbar {
                    width: 0px;
                    background-color: #1e293b;
                }
                .supporters ul::-webkit-scrollbar-thumb {
                    background-color: #334155;
                    border-radius: 8px;
                }
                .supporters ul::-webkit-scrollbar-track {
                    background-color: #0f172a;
                }
                
            `}</style>

            <div className='relative'>
                <Image
                    className='w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover'
                    unoptimized
                    src={currentuser.coverpic}
                    alt="Banner"
                />
                <div className='absolute -bottom-16 right-1/2 translate-x-1/2 size-40'>
                    <Image
                        className='rounded-full border-2 border-white size-40 object-cover'
                        width={160}
                        unoptimized
                        src={currentuser.profilepic}
                        alt="Profile"
                    />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-18 gap-1">
                <div className='font-bold text-2xl'>
                    @{username}
                </div>
                <div className='text-slate-300'>
                    {currentuser.bio}
                </div>
                <div className='text-slate-300'>
                    {payments.length} Supports • ₹{payments.reduce((acc, payment) => acc + payment.amount, 0)}/raised in total
                </div>
                <div className="payments flex flex-col md:flex-row gap-3 w-full md:w-[80%] my-10">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-4">
                        <h2 className='text-2xl font-bold'>Top 10 Supporters</h2>
                        <ul className='my-3 mx-3 max-h-[230px] overflow-y-auto'>
                            {loading ? (<li className='text-slate-400'>Loading...</li>) :
                                payments && payments.length > 0 ? (
                                    payments.map((payment, index) => (
                                        <li key={index} className='my-1 flex items-center gap-2'>
                                            <Image width={36} src="/avatar.gif" alt="" />
                                            <span>{payment.name} donated <span className='font-bold'>₹{payment.amount}</span> with a message "{payment.message}"</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className='text-slate-400'>No messages</li>
                                )}
                        </ul>
                    </div>
                    <div className="flex makePayments w-full md:w-1/2 bg-slate-900 rounded-lg p-4 flex-col">
                        <h2 className='text-2xl font-bold mb-2'>Make a Payment</h2>
                        <div className="flex flex-col gap-2 pt-1">
                            {/* input for name and message */}
                            <input
                                onChange={handleChange}
                                value={paymentform.name}
                                type="text"
                                name="name"
                                className="p-2 rounded border border-slate-700 bg-slate-800 text-white flex-1"
                                placeholder="Enter your name" />

                            <input
                                onChange={handleChange}
                                value={paymentform.message}
                                type="text"
                                name="message"
                                className="p-2 rounded border border-slate-700 bg-slate-800 text-white flex-1"
                                placeholder="Enter your message" />

                            <input
                                onChange={handleChange}
                                value={paymentform.amount}
                                type="text"
                                name="amount"
                                className="p-2 rounded border border-slate-700 bg-slate-800 text-white flex-1"
                                placeholder="Enter amount"
                            />
                            <button onClick={() => pay(paymentform.amount * 100)} className="bg-blue-600 cursor-pointer text-white rounded py-1 px-3 hover:bg-blue-700 transition disabled:bg-blue-500" disabled={!paymentform.name || !paymentform.message}>
                                Pay
                            </button>

                        </div>
                        {/* Or choose from this amount */}
                        <div className="flex gap-2 pt-2">
                            <button onClick={() => pay(500)} className="bg-slate-700 cursor-pointer text-white rounded py-2 px-3 hover:bg-slate-600 transition">
                                Pay ₹5
                            </button>
                            <button onClick={() => pay(1000)} className="bg-slate-700 cursor-pointer text-white rounded py-2 px-3 hover:bg-slate-600 transition">
                                Pay ₹10
                            </button>
                            <button onClick={() => pay(2000)} className="bg-slate-700 cursor-pointer text-white rounded py-2 px-3 hover:bg-slate-600 transition">
                                Pay ₹20
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage

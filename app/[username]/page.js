import PaymentPage from '@/components/PaymentsPage'
import React from 'react'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {

  const { username } = await params
  // If username is not valid, return 404 page
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({ username: username })
    if (!u) {
      notFound()
    }
  }
  await checkUser()

  return (
    <>
      <PaymentPage username={username} />
    </>
  )
}

export default Username

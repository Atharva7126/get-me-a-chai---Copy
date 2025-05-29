"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { ToastContainer, toast, Bounce } from 'react-toastify'
import React from 'react'
import { updateProfile, fetchuser } from "@/actions/useractions"

const Dashboard = () => {
  const { data: session, update } = useSession()
  const [form, setform] = useState({})

  useEffect(() => {
    if (session && session.user?.name) {
      getData()
    }

  }, [session])

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  //
  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    update()
    let a = await updateProfile(session.user.name, form)
    toast('Profile updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className='flex flex-col justify-center items-center mx-auto gap-1'>
        <h2 className='text-2xl my-7 font-bold'>Wellcome to your Dashboard</h2>
        <form className="md:w-[40%] flex flex-col gap-1 pt-1 w-[90%] " onSubmit={handleSubmit}>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Name
            <input value={form.name ? form.name : ""} onChange={handleChange} name="name" id="name" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Email
            <input disabled value={form.email ? form.email : ""} onChange={handleChange} name="email" id="email" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Username
            <input value={form.username ? form.username : ""} onChange={handleChange} name="username" id="username" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Bio
            <input value={form.bio ? form.bio : ""} onChange={handleChange} name="bio" id="bio" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Profile Picture URL
            <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} name="profilepic" id="profilepic" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Cover Picture URL
            <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} name="coverpic" id="coverpic" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Razorpay Key ID
            <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} name="razorpayid" id="razorpayid" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-200">
            Razorpay Secret Key
            <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} name="razorpaysecret" id="razorpaysecret" type="text" className='bg-slate-800 p-2 rounded-lg mt-1' />
          </label>
          <div className="flex gap-2 pt-2">
            <button className="bg-blue-700 w-full cursor-pointer text-white rounded py-2 px-3 hover:bg-blue-600 transition">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Dashboard

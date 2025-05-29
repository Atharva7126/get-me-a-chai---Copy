"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)

    return (
        <div className="bg-gray-900 text-white">
            <div className="bg-gray-900 shadow">
                <div className="container mx-auto md:px-4 px-2">
                    <div className="flex items-center justify-between py-2">
                        <Link href={"/"}>
                            <div className='text-xl font-semibold flex items-center mr-16'>
                                <Image className='mb-3 invertImg' width={50} src="/tea.gif" alt="" />
                                <span>GetMeAChai</span>
                            </div>
                        </Link>

                        <div className=" hidden sm:flex sm:items-center ">
                            <Link href="/" className="text-white transition-all text-sm font-semibold hover:text-gray-400 mr-5">Home</Link>
                            <Link href="/about" className="text-white transition-all text-sm font-semibold hover:text-gray-400 mr-5">About</Link>
                            <Link href="#" className="text-white transition-all text-sm font-semibold hover:text-gray-400 mr-5">Projects</Link>
                        </div>

                        <div className="sm:flex sm:items-center space-x-1 justify-end">
                            {session && <>
                                <button onBlur={() => {
                                    setTimeout(() => {
                                        setShowdropdown(false)
                                    }, 200);
                                }} onClick={() => setShowdropdown(!showdropdown)} className="text-white w-fit flex justify-center items-center cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center space-x-2"><Image className='rounded-full' src={session.user.image} alt="" width={24} /> {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="dropdown" className={`absolute top-16  z-15 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                        </li>

                                        <li>
                                            <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                                        </li>

                                        <li>
                                            <Link href="#" onClick={() => { signOut({ callbackUrl: '/login' }) }} className=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </>}
                            {!session && (
                                <Link href={"/login"} className='pr-3'>
                                    <button className="text-black cursor-pointer bg-white transition-all text-sm font-semibold border px-4 py-2 rounded-lg ml-20 hover:border-purple-600" >Login</button>
                                </Link>
                            )}
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Navbar

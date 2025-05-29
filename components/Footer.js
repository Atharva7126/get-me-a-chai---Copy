import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 shadow-sm ">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-between ">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2027 <a href="#" className="hover:underline">GetMeAChai</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
                    <li>
                        <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">Projects</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer

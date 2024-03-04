"use client"

import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-sky-800">
            <div className="max-m-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8 text-white">
                <div className="flex items-center justify-between h-10">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold">Plazo Fijo Online</h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/" className="text-slate-300 no-underline hover:text-slate-200">Home</Link>
                            <Link href="/about" className="text-slate-300 no-underline hover:text-slate-200">About</Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                    focus:outline-nome focus: ring-2 focus:ring-insert focus:ring-white"
                            onClick={toggleMenu}
                        >
                            {isOpen ? (
                                <svg className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor" >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" 
                        className="text-slate-300 block text-center no-underline hover:text-slate-200"
                        onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link href="/about" 
                        className="text-slate-300 block text-center no-underline hover:text-slate-200"
                        onClick={toggleMenu}
                        >
                            About
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
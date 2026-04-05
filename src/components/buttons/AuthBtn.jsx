"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const AuthBtn = () => {
    const session = useSession();
    return (
        <div>

            {
                session.status == "authenticated" ? <>
                    <button onClick={() => signOut()} className='btn'>Logout</button>
                </> : <>
                    <Link
                        href="/login"
                        className="hidden sm:flex text-sm font-mono text-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                        [ login ]
                    </Link>
                </>
            }
        </div>
    )
}

export default AuthBtn
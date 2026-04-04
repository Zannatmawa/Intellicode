"use client"
import Link from 'next/link'
import React from 'react'
import { Globe, Smartphone, Cpu, ChevronRight, ArrowUpRight, Command, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';


const CardBtn = ({ course }) => {
    const isLogin = true;
    const router = useRouter();
    const path = usePathname()
        ; const addtoCart = () => {
            if (isLogin) {
                alert(course._id)
            }
            else {

                router.push(`/login?callbackUrl=${path}`)
            }
        }
    return (
        <div>
            {/* <Link href={`/course-details/${course.id}`}>
                
            </Link> */}
            <button onClick={addtoCart} className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2.5 rounded text-xs font-bold flex items-center gap-2 hover:bg-emerald-500 hover:text-black transition-all">
                EXPLORE MODULE <ArrowUpRight size={14} />
            </button>
        </div>
    )
}

export default CardBtn
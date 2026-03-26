import React from 'react'
import Sidebar from './home/Sidebar'

const page = () => {
    return (
        <div className='flex h-screen bg-zinc-950 text-white overflow-hidden'>
            <aside className='w-64 bg-zinc-900 border-r border-zinc-800 flex-shrink-0'>
                <Sidebar />
            </aside>

            <div className='flex flex-col flex-1 overflow-hidden'>

                <header className='h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-zinc-900/50 backdrop-blur-md'>
                    <h1 className='text-xl font-bold tracking-tight'>Dashboard</h1>
                    <div className='flex items-center gap-4'>
                        <span className='text-sm text-zinc-400'>Welcome back, Priya</span>
                        <div className='w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-blue-500' />
                    </div>
                </header>

                <main className='flex-1 overflow-y-auto p-8 bg-black'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <div className='p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-green-400 transition-colors'>
                                <h3 className='font-semibold'>Active Courses</h3>
                                <p className='text-3xl font-bold mt-2'>09</p>
                            </div>
                        </div>

                        {/* Your "Priya" section or additional components */}
                        <section className='mt-10'>
                            {/* Your actual page content goes here */}
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default page
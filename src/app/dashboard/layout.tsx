// app/dashboard/layout.jsx
import Sidebar from '@/app/components/dashboard/Sidebar';

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar stays fixed */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Header stays fixed */}
                {/* <header className="h-16 border-b border-zinc-800 p-4">
                    Dashboard Header
                </header> */}

                {/* This is where the magic happens */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
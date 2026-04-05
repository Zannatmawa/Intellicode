// app/layout.jsx
"use client"; // optional if using hooks in layout

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Sidebar from "./home/Sidebar"

export default function RootLayout({ children }) {
    return (
        // <html lang="en">
        //     <body className="bg-[#09090B] text-white">
        //         {/* <Navbar /> */}
        //         <Sidebar />
        //         <main>{children}</main>
        //         {/* <Footer /> */}
        //     </body>
        // </html>
        <div className="flex min-h-screen bg-black">
            {/* Sidebar stays fixed */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Main content area */}
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}


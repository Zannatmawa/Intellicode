// "use client"
// import React, { useState } from 'react';
// import { Users, DollarSign, ShoppingCart, TrendingUp, MoreVertical, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';

// const AdminPage = () => {
//     const stats = [
//         { label: "Total Users", value: "12,450", icon: <Users />, color: "text-blue-500", bg: "bg-blue-500/10" },
//         { label: "Total Revenue", value: "$84,200", icon: <DollarSign />, color: "text-green-500", bg: "bg-green-500/10" },
//         { label: "Active Orders", value: "120", icon: <ShoppingCart />, color: "text-[#FC4000]", bg: "bg-[#FC4000]/10" },
//         { label: "Growth", value: "+12.5%", icon: <TrendingUp />, color: "text-purple-500", bg: "bg-purple-500/10" },
//     ];

//     const [users] = useState([
//         { id: 1, name: "Sarah Chen", email: "sarah@example.com", role: "Instructor", status: "Active" },
//         { id: 2, name: "Alex Rivers", email: "alex@v8.dev", role: "Admin", status: "Active" },
//         { id: 3, name: "Michael Frost", email: "frost@py.com", role: "User", status: "Suspended" },
//     ]);

//     return (
//         <div className="space-y-8">
//             <header>
//                 <h2 className="text-2xl font-bold">Admin Overview</h2>
//                 <p className="text-zinc-500 text-sm">System-wide performance and user management.</p>
//             </header>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {stats.map((stat, index) => (
//                     <div key={index} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
//                         <div className={`w-10 h-10 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
//                             {React.cloneElement(stat.icon, { size: 20 })}
//                         </div>
//                         <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
//                         <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
//                     </div>
//                 ))}
//             </div>

//             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
//                 <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
//                     <h3 className="font-bold">Recent Users</h3>
//                     <button className="bg-[#FC4000] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors">
//                         Add New User
//                     </button>
//                 </div>

//                 <div className="overflow-x-auto">
//                     <table className="w-full text-left border-collapse">
//                         <thead>
//                             <tr className="bg-zinc-950 text-zinc-500 text-xs uppercase tracking-widest">
//                                 <th className="p-4 font-semibold">User</th>
//                                 <th className="p-4 font-semibold">Role</th>
//                                 <th className="p-4 font-semibold">Status</th>
//                                 <th className="p-4 font-semibold text-right">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-zinc-800">
//                             {users.map((user) => (
//                                 <tr key={user.id} className="hover:bg-zinc-800/50 transition-colors">
//                                     <td className="p-4">
//                                         <div className="flex flex-col">
//                                             <span className="font-medium">{user.name}</span>
//                                             <span className="text-xs text-zinc-500">{user.email}</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-4 text-sm text-zinc-300">{user.role}</td>
//                                     <td className="p-4">
//                                         <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${user.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
//                                             }`}>
//                                             {user.status}
//                                         </span>
//                                     </td>
//                                     <td className="p-4 text-right">
//                                         <div className="flex justify-end gap-2 text-zinc-500">
//                                             <button className="p-2 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"><Edit size={16} /></button>
//                                             <button className="p-2 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"><Trash2 size={16} /></button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminPage;

// app/dashboard/page.jsx
"use client"; // optional if using hooks
import React from "react";

export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-white">Welcome to Dashboard</h1>
        </div>
    );
}
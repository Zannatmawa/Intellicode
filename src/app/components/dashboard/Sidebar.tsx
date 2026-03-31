import React from 'react';
import Link from 'next/link';
import {
    User,
    ShoppingBag,
    Star,
    Users,
    Package,
    ClipboardList,
    BarChart3,
    Settings
} from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { name: "My Profile", href: "/dashboard/my-profile", icon: <User size={18} /> },
        { name: "My Courses", href: "/dashboard/my-courses", icon: <ShoppingBag size={18} /> },
        { name: "My Reviews", href: "/dashboard/my-reviews", icon: <Star size={18} /> },
        { name: "Manage Users", href: "/admin/users", icon: <Users size={18} /> },
        { name: "Manage Products / Events", href: "/admin/products", icon: <Package size={18} /> },
        { name: "Manage Orders", href: "/admin/orders", icon: <ClipboardList size={18} /> },
        { name: "Analytics", href: "/admin/analytics", icon: <BarChart3 size={18} /> },
        { name: "Settings", href: "/settings", icon: <Settings size={18} /> },
    ];

    return (
        <nav className="flex flex-col gap-1 w-full max-w-xs bg-zinc-950 p-4 border-r border-zinc-800 min-h-screen">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-zinc-400 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:text-[#FC4000] group"
                >
                    <span className="text-zinc-500 group-hover:text-[#FC4000]">
                        {item.icon}
                    </span>
                    <span className="text-sm font-medium">
                        {item.name}
                    </span>
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
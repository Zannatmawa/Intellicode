import React from 'react';
import { User, Mail, MapPin, Calendar, Edit2, Shield } from 'lucide-react';

const ProfilePage = () => {
    const user = {
        name: "Alex",
        role: "Software Developer",
        email: "alex.dev@example.com",
        location: "Chattogram, Bangladesh",
        joined: "January 2026",
        bio: "Full-stack developer proficient in the MERN stack. Passionate about building high-performance web applications and exploring V8 engine internals."
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
                    <div className="h-32 bg-emerald-600"></div>

                    <div className="px-8 pb-8">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <div className="p-1 bg-black rounded-2xl">
                                <div className="w-24 h-24 bg-zinc-800 rounded-xl flex items-center justify-center border-2 border-zinc-700">
                                    <User size={48} className="text-zinc-500" />
                                </div>
                            </div>
                            <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-zinc-700">
                                <Edit2 size={16} />
                                Edit Profile
                            </button>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-emerald-500 font-medium">{user.role}</p>
                        </div>

                        <p className="mt-4 text-zinc-400 max-w-2xl leading-relaxed">
                            {user.bio}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-3 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <Mail size={18} className="text-emerald-500" />
                                <span className="text-sm">{user.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <MapPin size={18} className="text-emerald-500" />
                                <span className="text-sm">{user.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <Calendar size={18} className="text-emerald-500" />
                                <span className="text-sm">Joined {user.joined}</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <Shield size={18} className="text-emerald-500" />
                                <span className="text-sm">Verified Account</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center hover:border-emerald-500/50 transition-colors">
                        <span className="text-3xl font-bold text-emerald-500">12</span>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Courses Done</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center hover:border-emerald-500/50 transition-colors">
                        <span className="text-3xl font-bold text-emerald-500">4</span>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Active Bookings</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center hover:border-emerald-500/50 transition-colors">
                        <span className="text-3xl font-bold text-emerald-500">4.9</span>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">Avg Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
// import { signIn } from 'next-auth/react'
// import React from 'react'
// import Swal from 'sweetalert2';
// import { ChevronRight } from "lucide-react";
// import { useSearchParams } from 'next/navigation';

// const SocialButton = () => {
//     const params = useSearchParams();
//     const handleSignIn = async () => {
//         const result = await signIn("google", {
//             redirect: false,
//             callbackUrl: params.get("callbackUrl") || "/"
//         });
//         console.log(result);
//         if (result?.ok) {
//             Swal("successful");
//             // router.push("/login");
//         }
//         else {
//             Swal("error");
//         }
//     }
//     return (
//         <div>
//             <button onClick={handleSignIn} className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-95">
//                 Sign in with Google <ChevronRight size={16} />
//             </button>
//         </div>
//     )
// }

// export default SocialButton
import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({children}) {

  const { data: session } = useSession();
  if (!session) {
    return (

      <div className="bg-teal-600 h-screen w-screen text-center justify-center flex items-center">
        <div>
          <button onClick={() => signIn('google')} className="bg-cyan-950 p-4 rounded-lg text-2xl text-teal-500 font-bold hover:bg-teal-800">
            Sign In with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-teal-600 min-h-screen min-w-screen  flex">
      <Nav></Nav>
      <div className="flex bg-white flex-grow mt-2 mb-2 mr-2 rounded-xl p-4 text-black">
      {children}
      </div>
    </div>
  );
}

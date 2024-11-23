"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { createTRPCNext } from '@trpc/next';
import { appRouter, type AppRouter } from '@/server/api/root';
interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  // const [queryClient] = useState(() => new QueryClient());
  // const [trpcClient] = useState(
  //   trpc.createClient as () => trpc.TRPCClient<ReturnType<typeof appRouter>>
  // );
  return (


    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            {/* <SignedOut>
              <SignInButton />
            </SignedOut> */}
            {/* <SignedIn> <DropdownMenuItem>
              <UserButton />
            </SignedIn> */}
          </header> <TRPCReactProvider>
            <main>{children}</main> </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>

  )
}
export default RootLayout


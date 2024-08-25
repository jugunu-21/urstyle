import { Inter } from "next/font/google";

import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className={inter.className}>{children}</div>
            <Footer />
            <Toaster />
        </>
    );
}
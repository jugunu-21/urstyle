import { Inter } from "next/font/google";

import Navbar from "@/components/layoutt/navbarr/navbarr";
import Footer from "@/components/layoutt/footerr/footerr";
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
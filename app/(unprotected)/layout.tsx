import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                {/* Include any head elements here, such as <title> or <meta> tags */}
            </head>
            <body>
                <Navbar />
                <div className={inter.className}>{children}</div>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
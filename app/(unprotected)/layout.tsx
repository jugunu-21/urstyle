import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer/footer";
import { Toaster } from 'react-hot-toast';
import {FlipNavWrapper} from "@/components/layout/navbar/drop-nav"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <FlipNavWrapper />

            <div className={inter.className}>{children}</div>
            <Footer />
            <Toaster />
       
        </>
    );
}
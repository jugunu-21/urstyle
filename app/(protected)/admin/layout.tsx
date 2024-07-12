
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import { Sidetooltip } from '@/components/admin/product/productutils/layout/sidetooltip';

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <Sidetooltip />
          <div className={inter.className}>{children}</div>
        </div>
      </ThemeProvider>
    </>
  );
}



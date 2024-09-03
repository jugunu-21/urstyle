
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className={inter.className}>{children}</div>
      </ThemeProvider>
    </div>
  );
}



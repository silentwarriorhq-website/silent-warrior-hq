import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Silent Warrior HQ",
  description: "Public records advocacy, accountability intelligence, and watchdog reporting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold text-slate-900">
              Silent Warrior HQ
            </Link>

            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/advocacy">Advocacy</Link>
              <Link href="/intelligence">Intelligence</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}

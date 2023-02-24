export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13</title>
      </head>

      <body>
        <nav className="text-red-600">Next.js 13</nav>
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13</title>
      </head>

      <body>
        <nav>Next.js 13</nav>
        {children}
      </body>
    </html>
  );
}

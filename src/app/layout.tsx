export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta title="People Directory" />
      </head>
      <body>
        <div id="root">${children}</div>
      </body>
    </html>
  );
}

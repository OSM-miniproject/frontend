export const metadata = {
  title: 'OCDetect',
  description: 'Something to detect OC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

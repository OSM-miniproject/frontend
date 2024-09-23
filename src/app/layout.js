export const metadata = {
  title: 'OCDetect',
  description: 'Something to detect OC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        header1
        {children}
        footer1
      </body>
    </html>
  )
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'OCDetect',
  description: 'Something to detect OCD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

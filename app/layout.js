import './globals.css'

export const metadata = {
  title: "Massage Website",
  description: "Charity",
}

export default function RootLayout({ children }) {
  const page = "bg-orange-300 w-screem h-screen";
  return (
    <html lang="en">
      <body className={page}>{children}</body>
    </html>
  )
}

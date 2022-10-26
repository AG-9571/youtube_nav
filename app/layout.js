import "../public/css/style.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Youtube Nav</title>
      </head>
      <body>
        {
        children
        }
        </body>
    </html>
  )
}

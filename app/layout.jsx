import "../public/css/style.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Youtube Nav</title>
      </head>
      <body className=" max-w-screen-2xl px-5">
        {
          children
        }
      </body>
    </html>
  )
}

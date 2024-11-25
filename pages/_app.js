import "@/styles/globals.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}

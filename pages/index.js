import Head from "next/head"
import { questions } from "@/public/questions"
import Quize from "@/components/Quize/Quize"

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Quize quizeTitle="Тестирование" questions={questions} />
    </>
  )
}

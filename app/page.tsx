import ThemeToggle from '@/components/ThemeToggle'
import WeatherCard from '@/components/WeatherCard'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Head>
        <title>Site Météo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center w-full text-center">
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <h1 className="sm:text-6xl text-3xl font-bold text-primary">
          Bienvenue sur Votre Site Météo
        </h1>
        <p className="mt-3 sm:text-2xl text-1xl ">
          Obtenez les prévisions météorologiques précises et à jour.
        </p>
        <WeatherCard />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Météo - 2024
      </footer>
    </div>
  )
}

export default Home


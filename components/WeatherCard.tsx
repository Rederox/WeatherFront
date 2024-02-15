"use client";
import React, { useEffect, useState } from 'react';
import { WeatherData } from '@/interfaces/weatherData';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [city, setCity] = useState<string>('Paris');
    const [fetchData, setFetchData] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/weather/${city}`)
            .then((res) => {
                if (res.status === 500) {
                    console.log(res.statusText);
                }
                return res.json();
            })
            .then((data: WeatherData) => {
                setWeatherData(data);
            })
            .catch((error) => {
                setError(error);
                setWeatherData(null);
                setCity('');
            });
        setFetchData(false);
    }, [fetchData]);

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setFetchData(!fetchData);
    };


    return (
        <>
            <div className="py-10 px-5">
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Entrez une ville"
                        className="px-4 py-2 rounded border shadow-sm focus:outline-none focus:ring-2  focus:ring-blue-500 text-black"
                    />
                    <button
                        type="submit"
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    >
                        Charger
                    </button>
                </form>
                {weatherData ? (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-gray-800 p-5">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    {weatherData.location.name}, {weatherData.location.region}
                                </div>

                                <div className='flex items-center justify-center'>
                                    <a href="#" className="text-lg leading-tight font-medium text-black dark:text-white">
                                        {weatherData.current.condition.text}
                                    </a>
                                    <img src={weatherData.current.condition.icon} alt="weather icon" />
                                </div>

                                <div className='flex items-center justify-center gap-2'>
                                    <div className=" text-gray-500 dark:text-gray-400">
                                        Température actuelle: 
                                    </div>
                                    <div className='font-bold'>
                                        {weatherData.current.temperature}°C
                                    </div>
                                </div>

                                <div className='flex items-center justify-center gap-2'>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        Ressentie:
                                    </div>
                                    <div className='font-bold'>
                                        {weatherData.current.feelsTemp}°C
                                    </div>
                                </div>

                                <div className='flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400'>
                                    Vent : 
                                    <p className="font-bold text-black dark:text-white">
                                        {weatherData.current.wind_kph}  {weatherData.current.wind_dir}
                                    </p>
                                    kph direction
                                    <p className="font-bold text-black dark:text-white">
                                        {weatherData.current.wind_dir}
                                    </p>
                                </div>
                                
                                <div className='flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400'>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        Humidité:
                                    </div>
                                    <p className="font-bold text-black dark:text-white">
                                        {weatherData.current.humidity}%
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
                }
            </div>
        </>
    );
};

export default WeatherComponent;

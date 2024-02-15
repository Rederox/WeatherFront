export interface WeatherData {
    location: {
        name: string;
        region: string;
    };
    current: {
        temperature: number;
        feelsTemp: number;
        wind_kph: number;
        wind_dir: string;
        humidity: number;
        condition: {
        text: string;
        icon: string;
        };
    };
};
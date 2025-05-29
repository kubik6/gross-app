import React, { useEffect, useState } from 'react';
import './MarqueeWidget.scss';

type Rates = {
    [currency: string]: number;
};

const CURRENCIES = ['EUR', 'GBP', 'JPY', 'AUD'];

export const MarqueeWidget: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const [rates, setRates] = useState<Rates>({});

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch(`https://api.exchangerate.host/latest?base=USD&symbols=${CURRENCIES.join(',')}`);
                const data = await res.json();
                setRates(data.rates);
            } catch (err) {
                console.error('Failed to fetch rates:', err);
            }
        };

        fetchRates();
        const interval = setInterval(fetchRates, 60000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="marquee-widget">
            <div className="marquee-widget__track">
                <span className="marquee-widget__item">🕒 {formattedTime}</span>
                {CURRENCIES.map((currency) => {
                    const rate = rates?.[currency];
                    return (
                        <span key={currency} className="marquee-widget__item">
                            💱 USD/{currency}: {rate !== undefined ? rate.toFixed(2) : '...'}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default MarqueeWidget;
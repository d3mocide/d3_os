import { useState, useEffect } from 'react';

export const useIP = () => {
    const [ip, setIp] = useState<string>('LOADING...');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIp(data.ip);
            } catch (err) {
                console.error('Failed to fetch IP:', err);
                setIp('OFFLINE');
                setError('Failed to resolve IP');
            }
        };

        fetchIP();
    }, []);

    return { ip, error };
};

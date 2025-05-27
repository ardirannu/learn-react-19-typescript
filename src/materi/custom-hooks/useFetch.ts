import { useEffect, useState } from "react";

// T generic parameter
interface FetchResult <T> {
    data: T | null
    loading: boolean
    error: string | null
}

function useFetch<T>(url:string): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Network not ok');
				}
				const result:T = await response.json();

				setData(result);
                setLoading(false)
			} catch (error) {
				setError((error as Error).message);
				setLoading(false);
			}
		};
        
		fetchData();
	}, []);

    return {data, loading, error}
}

export default useFetch
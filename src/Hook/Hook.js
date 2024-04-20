import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDataApiFunction = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();

            // Check if the response contains the expected key holding an array
            const dataArray = responseData && responseData.data && Array.isArray(responseData.data) ? responseData.data : [];

            setData(dataArray);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.log(error, "Error in the fetching data hook");
            setLoading(false); // Set loading to false in case of error
        }
    };

    useEffect(() => {
        fetchDataApiFunction();
    }, [url]);

    return { data, loading };
};

export default useFetchData;

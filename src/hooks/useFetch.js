import { useEffect, useState } from "react";
import { getCars } from "../functions/getCars";

export const useFetch = (url) => {
    const [currData, setCurrData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCars(url,'',setCurrData,setLoading,setError);
    }, [url]);

    return [currData,loading,error,setCurrData,setLoading,setError];
};
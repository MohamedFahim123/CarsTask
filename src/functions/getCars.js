import axios from "axios";

export const getCars = async (url, params , setData, setLoading, setError) => {
    setLoading(true);
    await axios.get(url, {
        params: {
            search: params
        },
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    })
        .then(res => {
            setData(res?.data?.cars);
            setLoading(false);
        })
        .catch(err => {
            setError(err?.message);
            setLoading(false);
        });
};
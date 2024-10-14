import { useEffect, useState } from "react";
import HomeCarsSection from "../../components/homeCarsSection/HomeCarsSection";
import { baseUrl } from "../../functions/baseUrl";
import UpperPageLinks from "../../components/upperPageLinks/UpperPageLinks";
import Pagination from "../../components/pagination/Pagination";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader/Loader";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Cars() {
  const [currData, loading] = useFetch(`${baseUrl}`);
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(12);
  const [currCars ,setCurrCars] = useState([]);

  const links = [
    {
      id: 1,
      path: '/',
      name: 'Home'
    },
    {
      id: 2,
      path: 'anything',
      name: 'cars'
    },
  ];
  useEffect(()=>{
    setCurrCars(currData);
  },[currData])

  const [loadingPage , setLoadingPage] = useState(true);

  useEffect(() => {
    setInterval(()=> {setLoadingPage(false)}, 500);
  },[]);

  if(loadingPage){
    return <Loader />;
  };

  return (
    <>
      <UpperPageLinks links={links} />
      <SearchBar currCars={currCars} currData={currData} setCurrCars={setCurrCars} loading={loading} setFirstItem={setFirstItem} setLastItem={setLastItem} />
      <HomeCarsSection
        loading={loading}
        currCars={currCars?.slice(firstItem, (currCars?.length >= lastItem ? lastItem : currCars?.length))} 
        homePage={false} 
      />
      <Pagination currCars={currCars} startPoint={0} endPoint={12} setFirstItem={setFirstItem} setLastItem={setLastItem} />
    </>
  );
};

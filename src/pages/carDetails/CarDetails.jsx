import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { baseUrl } from "../../functions/baseUrl";
import WhyChooseUsSec from "../../components/whyChooseUsSec/WhyChooseUsSec";
import UpperPageLinks from "../../components/upperPageLinks/UpperPageLinks";

export default function CarDetails() {
  const [loadingPage, setLoadingPage] = useState(true);
  const { id } = useParams();
  const [currData, loading] = useFetch(`${baseUrl}`);

  const links = [
    {
      id: 1,
      path: '/',
      name: 'Home'
    },
    {
      id: 2,
      path: '/cars',
      name: 'Cars'
    },
    {
      id: 3,
      path: `nothing`,
      name: `${currData?.find(el => +el?.id === +id)?.car} ${currData?.find(el => +el?.id === +id)?.car_model}`
    },
  ];

  useEffect(() => {
    setInterval(() => { setLoadingPage(false) }, 500);
  }, []);

  if (loadingPage) {
    return <Loader />;
  };

  if (loading) {
    return <Loader />
  };

  return (
    <>
      <UpperPageLinks links={links} />
      <WhyChooseUsSec carData={currData?.find(el => +el?.id === +id)} homePage={false} />
    </>
  );
};

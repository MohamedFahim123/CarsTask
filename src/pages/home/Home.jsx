import { useEffect, useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import { baseUrl } from "../../functions/baseUrl";
import HomeCarsSection from "../../components/homeCarsSection/HomeCarsSection";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import CarouselSection from "../../components/carouselSection/CarouselSection";
import WhyChooseUsSec from "../../components/whyChooseUsSec/WhyChooseUsSec";
import Testimonials from "../../components/testimonials/Testimonials";
import RentCarSection from "../../components/rentCarSection/RentCarSection";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [currData, loading] = useFetch(`${baseUrl}`);
  const [loadingPage , setLoadingPage] = useState(true);

  useEffect(() => {
    setInterval(()=> {setLoadingPage(false)}, 500);
  },[]);

  if(loadingPage){
    return <Loader />;
  };


  return (
    <>
      <HeroSection />
      <HomeCarsSection loading={loading} homePage={true} currCars={currData.slice(0,4)} />
      <HowItWorks />
      <CarouselSection />
      <WhyChooseUsSec homePage={true} />
      <Testimonials />
      <RentCarSection />
    </>
  );
};

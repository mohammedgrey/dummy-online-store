import Router from "next/router";
import { useEffect, useState, useRef } from "react";

//To handle the loading state of all the pages
const useLoadingPage = () => {
  const [loadingPage, setLoadingPage] = useState(false);
  const componnetIsStillMounted = useRef(true);

  const routeChangeStart = () => {
    if (componnetIsStillMounted.current) setLoadingPage(true);
  };
  const routeChangeComplete = () => {
    if (componnetIsStillMounted.current) setLoadingPage(false);
  };
  Router.events.on("routeChangeStart", routeChangeStart);
  Router.events.on("routeChangeComplete", routeChangeComplete);

  //For cleaning up
  useEffect(() => {
    return () => {
      componnetIsStillMounted.current = false;
    };
  }, []);
  return loadingPage;
};
export default useLoadingPage;

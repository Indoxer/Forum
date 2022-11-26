import { useState, useEffect} from "react";

const getIsMobile = (actualValue : boolean) => {
  if (typeof window == "undefined") {
    return false;
  }

  if (window.innerWidth < 1000 && !actualValue) {
    return true;
  }

  if (window.innerWidth > 1000 && actualValue) {
    return false;
  }
  
  return actualValue;
}

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(getIsMobile(isMobile));
  }, [])

  useEffect(() => {

    const updateIsMobile = () => setIsMobile(getIsMobile(isMobile));

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, [isMobile]);

  return isMobile;
}

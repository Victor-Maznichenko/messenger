import useLocalStorage from "@/shared/lib/hooks/useLocalStorage";
import App from "./App";
import { useEffect } from "react";

const AppWrapper = () => {
   const [themeItem] = useLocalStorage({
		key: "theme",
	});

   useEffect(() => {
      document.body.setAttribute("data-theme", themeItem ?? "dark")
   }, [])
   
  return <App />;
}

export default AppWrapper;
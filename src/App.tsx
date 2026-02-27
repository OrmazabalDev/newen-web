import { useEffect, useState } from "react";
import NewenWebsite from "./NewenWebsite";
import PrivacyPolicy from "./PrivacyPolicy";

const getRoute = () => {
  if (typeof window === "undefined") {
    return "/";
  }
  return window.location.hash.replace(/^#/, "") || "/";
};

const App = () => {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route.startsWith("/politica-de-privacidad")) {
    return <PrivacyPolicy />;
  }

  return <NewenWebsite />;
};

export default App;

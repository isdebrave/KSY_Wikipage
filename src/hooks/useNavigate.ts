import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNavigate = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const pathHandler = () => setPath(window.location.pathname);

    window.addEventListener("popstate", pathHandler);

    return () => window.removeEventListener("popstate", pathHandler);
  }, []);

  useEffect(() => {}, []);

  const to = (path: string) => {
    window.history.pushState({}, "", path);
    setPath(path);
  };

  return { to };
};

export default useNavigate;

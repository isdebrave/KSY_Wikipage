import React from "react";
import { Link, useLocation } from "react-router-dom";

import useRegisterModal from "../hooks/useRegisterModal";

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const registerModal = useRegisterModal();

  return (
    <>
      <div className="flex justify-center p-2 gap-10 text-lg font-semibold">
        <Link
          to="/"
          className={`
            ${pathname === "/" && "text-sky-500"}
            hover:opacity-80
          `}
        >
          메인페이지
        </Link>
        <button onClick={registerModal.onOpen} className="hover:opacity-80">
          추가
        </button>
      </div>
      {children}
    </>
  );
};

export default Navbar;

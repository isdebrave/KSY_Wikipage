import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import data, { offset } from "../db/data";

interface PaginationProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  hasPrevPage,
  hasNextPage,
}) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const page = new URLSearchParams(search).get("page") ?? "1";
  const totalPage = Math.ceil(data.length / offset);

  return (
    <div className="flex justify-end items-center gap-5">
      <div>
        {page} / {totalPage} 페이지
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={!hasPrevPage}
          onClick={() => navigate(`/?page=${+page - 1}`)}
        >
          <IoArrowBack
            size={20}
            className={`${!hasPrevPage && "text-gray-300"}`}
          />
        </button>
        <button
          disabled={!hasNextPage}
          onClick={() => navigate(`/?page=${+page + 1}`)}
        >
          <IoArrowForward
            size={20}
            className={`${!hasNextPage && "text-gray-300"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

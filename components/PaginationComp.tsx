import React from "react";
import { TDirection } from "../types";
import qs from "qs";
import {useRouter} from 'next/router'

interface IPropType{
  page:number,
  pageCount:number,
  redirectUrl?:string
}

const PaginationComp = ({page, pageCount, redirectUrl='/'}:IPropType) => {

  const router =useRouter();

  const isPrevDisabled = (): boolean => {
    return page<=1;
  };
  const isNextDisabled = (): boolean => {
    return page>=pageCount;
  };

  const handlePagination = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }

    const queryString= qs.stringify({
      ...router.query, 
      page:page+direction
    });

    router.push(`${redirectUrl}?${queryString}`)

  };

  return (
    <div className=" justify-center flex m-6">
      <button
        type="submit"
        onClick={() => handlePagination(-1)}
        className={`bg-primary hover:bg-primary-dark rounded-sm px-4 py-2 text-white w-24 ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        type="submit"
        onClick={() => handlePagination(1)}
        className={`bg-primary hover:bg-primary-dark rounded-sm px-4 py-2 text-white w-24 ml-4 ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComp;

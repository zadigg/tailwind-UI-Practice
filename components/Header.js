import React from "react";
import { FaBeer } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="p-10 flex justify-between">
        <div className="hidden sm:flex">Logo</div>
        <div className="mx-auto sm:mx-0 text-[#1E1D4F] font-bold text-3xl">
          Bus Ticket System
        </div>
        <div className="hidden sm:flex text-[#1E1D4F] font-semibold animate-bounce">
          About
        </div>
      </div>
      {/*  */}

      <div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
        <div className="flex pb-3">
          <div className="flex-1"></div>

          <div className="flex-1">
            <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
              <span className="text-white text-center w-full">
                <FaBeer className="w-full fill-current text-black" />
                {/* Logo 1 */}
              </span>
            </div>
          </div>

          <div className="w-1/6 align-center items-center align-middle content-center flex">
            <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
              <div className="w-[100%] bg-green-500 text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
              <span className="text-white text-center w-full">
                <FaBeer className="w-full fill-current text-black" />
                {/* Logo 2 */}
              </span>
            </div>
          </div>

          <div className="w-1/6 align-center items-center align-middle content-center flex">
            <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
              <div className="w-[100%] bg-green-500 text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
              <span className="text-grey-darker text-center w-full">
                <FaBeer className="w-full fill-current text-black" />
                {/* Logo 3 */}
              </span>
            </div>
          </div>

          <div className="w-1/6 align-center items-center align-middle content-center flex">
            <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
              <div className="w-[30%] bg-green-500 text-xs leading-none py-1 text-center text-grey-darkest rounded  "></div>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
              <span className="text-grey-darker text-center w-full">
                <FaBeer className="w-full fill-current text-black" />
                {/* Logo 4 */}
              </span>
            </div>
          </div>

          <div className="flex-1"></div>
        </div>

        <div className="flex text-xs content-center text-center">
          <div className="w-1/4">Booking Details</div>

          <div className="w-1/4">Availble bus </div>

          <div className="w-1/4">Finish</div>

          <div className="w-1/4">Confirmation</div>
        </div>
      </div>
    </div>
  );
}

export default Header;

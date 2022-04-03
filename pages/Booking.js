import React from "react";
import Header from "../components/Header";
import { HiLocationMarker } from "react-icons/hi";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";
import AvailableBus from "./AvailableBus.js";
function Booking() {
  return (
    <div>
      <Header />

      {/* Booking Starts */}
      <div className="bg-gradient-to-b from-[#F4F1E9] via-[#FCF0DB] to-gray-[#F4F2E3]  h-[50vh] md:max-w-3xl mx-auto space-y-8 mt-10 md:mt-16 lg:mt-20   ">
        {/* Start and Destination */}
        <div className="w-full md:flex">
          {/* Start */}
          <div className="space-y-1 m-2 md:w-1/2 ">
            <label
              htmlFor="start"
              className="text-xl text-[#1E1D4F] font-semibold "
            >
              Start
            </label>
            <div className="flex items-center bg-white rounded-lg rounded-l-lg border border-gray-200 ">
              <select
                className="block w-[90%] p-4 z-10 bg-gray-100 animate-pulse appearance-none outline-none"
                name="destination"
                id="destination"
              >
                <option value="volvo">A.A</option>
                <option value="saab">Gurage</option>
                <option value="mercedes">Debrebrihan</option>
                <option value="audi">Ambo</option>
              </select>
              <HiLocationMarker className="" />
            </div>
          </div>
          {/* Start */}
          {/* Destination */}
          <div className="space-y-1 m-2 md:w-1/2">
            <label
              htmlFor="start"
              className="text-xl text-[#1E1D4F] font-semibold "
            >
              Destination
            </label>
            <div className="flex items-center bg-white rounded-lg rounded-l-lg border border-gray-200 ">
              <select
                className="block w-[90%] p-4 z-10 bg-gray-100 animate-pulse appearance-none outline-none"
                name="destination"
                id="destination"
              >
                <option value="volvo">Hawassa</option>
                <option value="saab">Bahirdar</option>
                <option value="mercedes">Mekelle</option>
                <option value="audi">Jimma</option>
              </select>

              <HiLocationMarker className="" />
            </div>
          </div>
          {/* Destination */}
        </div>
        {/* Start and Destination */}

        {/* Number of seats and Date of Arrival  */}
        <div className="w-full md:flex">
          {/* Number of seats */}
          <div className="space-y-1 m-2 md:w-1/2 ">
            <label
              htmlFor="start"
              className="text-xl text-[#1E1D4F] font-semibold "
            >
              Number of seats
            </label>
            <div className="flex items-center bg-white rounded-lg rounded-l-lg border border-gray-200 ">
              <input
                type="number"
                htmlFor="start"
                className=" w-full py-[14px] px-4 text-gray-700   leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          {/* Number of seats */}
          {/* Date of Arrival */}
          <div className="space-y-1 m-2 md:w-1/2">
            <label
              htmlFor="start"
              className="text-xl text-[#1E1D4F] font-semibold "
            >
              Date
            </label>
            <div className="flex items-center bg-white rounded-lg rounded-l-lg border border-gray-200 ">
              <input
                type="date"
                htmlFor="start"
                className=" w-full py-[14px] px-4 text-gray-700   leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          {/* Date of Arrival */}
        </div>
        {/* Number of seats and Date of Arrival  */}

        <div className="flex justify-center md:mt-11 ">
          <Link href="./AvailableBus" passHref>
            <button className="bg-[#62C033] px-16 py-4 w-full m-4 rounded-xl text-lg text-white">
              <a>Next</a>
            </button>
          </Link>
        </div>
      </div>
      {/* Booking Ends */}
    </div>
  );
}

export default Booking;

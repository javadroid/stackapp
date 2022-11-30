import React, { useState, useEffect } from "react";
import { SearchBar, Map } from "../components/map";
import { useCentersListQuery } from "../features/apiSlices/bloodCentersApiSlice";

const location = {
  address:
    "43 mambolo street wuse zone 2 zone 2 Mambolo St, Wuse 904101, Abuja, Nigeria",
  lat: 9.058291384251444,
  lng: 7.462374396610043,
};

const BookAppointment = () => {
  const { data: centersList = [] } = useCentersListQuery();

  const [Centers, setCenters] = useState(centersList);

  console.log(centersList);

  // useEffect(() => {
  //   const fetchCenter = async () => {
  //     const response = await centersList().unwrap();
  //     console.log(response);
  //   };

  //   fetchCenter();
  // }, []);

  return (
    <div className="w-full">
      <SearchBar CenterList={Centers} setCenters={setCenters} />

      <Map location={location} zoomLevel={17} CenterList={Centers} />
    </div>
  );
};

export default BookAppointment;

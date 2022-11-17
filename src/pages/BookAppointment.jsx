import React, { useState } from "react";
import { CenterList, SearchBar, Map } from "../components/map";

const location = {
  address:
    "43 mambolo street wuse zone 2 zone 2 Mambolo St, Wuse 904101, Abuja, Nigeria",
  lat: 9.058291384251444,
  lng: 7.462374396610043,
};

const BookAppointment = () => {



  const [Centers, setCenters] = useState(CenterList);
  return (
    <div className="w-full">
      <SearchBar CenterList={CenterList} setCenters={setCenters} />

      <Map location={location} zoomLevel={17} CenterList={Centers} />
    </div>
  );
};

export default BookAppointment;

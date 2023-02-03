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
  const { isSuccess, isLoading, isError, data } = useCentersListQuery();

  const [Centers, setCenters] = useState([]);

  let status;
  if (isLoading) status = "isLoading";
  if (isError) status = "isError";
  if (isSuccess) status = "isSuccess";
  useEffect(() => {
    if (isSuccess) setCenters(data);
  }, [status]);

  return (
    <div className="w-full">
      <div className="inline lg:hidden ">
        <SearchBar CenterList={Centers} setCenters={setCenters} />
      </div>

      <Map
        location={location}
        zoomLevel={17}
        CenterList={Centers}
        setCenters={setCenters}
        status={status}
      />
    </div>
  );
};

export default BookAppointment;

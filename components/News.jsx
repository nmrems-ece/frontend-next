import React from "react";
import MediaCard from "./NewsCard";
import { Typography } from "@mui/material";

const News = ({ news, image }) => {
  return (
    <>
      <div className="m-6"></div>
      <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
        <div className="bg-inherit ">
          <MediaCard />
        </div>
      </div>
    </>
  );
};

export default News;

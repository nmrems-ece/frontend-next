import React from "react";
import News from "@/components/News";
import MediaCard from "@/components/NewsCard";
import { Typography } from "@mui/material";
import discovery1 from "../../public/Assests/discovery1.jpeg";

const Page = () => {
  return (
    <>
      <aside>
        <div className="flex justify-center items-center bg-[#49516f] p-4 text-2xl font-bold ">
          <Typography className="flex justify-center items-center p-6 text-2xl font-bold text-white bg-local">
            News
          </Typography>
        </div>
        <div className="m-4 border-slate-100 ">
          <div className="m-6"></div>
          <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
            <div className="bg-inherit ">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1} title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
          <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
            <div className="bg-inherit ">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1} title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
          <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
            <div className="bg-inherit ">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1} title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
          <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
            <div className="bg-inherit ">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1} title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
          <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
            <div className="bg-inherit ">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1} title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
          <div className="flex justify-center item-center wrap m-4 rounded  w-full m-4">
            <div className="bg-inherit ">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1} title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
          
        </div>
      </aside>
    </>
  );
};

export default Page;

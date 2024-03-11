import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div>
      <p>Profile of User {params.id}</p>
    </div>
  );
};

export default UserProfile;








<div className="flex flex-col flex-wrap m-0">
              <div className="grid grid-col-2 justify-center  items-center m-0">
                <div className="flex flex-wrap overflow-hidden place-content-center">
                  <Card title={"Gold"} className="m-2 border align-center" />
                  <Card title={"Gold"} className="m-2" />
                  <Card title={"Gold"} className="m-2" />
                  <Card title={"Gold"} className="m-2" />
                </div>
              </div>
                    <div className="grid grid-col-3 overflow-auto">
              <div className="grid grid-col-3 flex-wrap  ">
                <div className="grid grid-col-2 flex-wrap h-4/12 m-2">
                  <MediaCard
    
                    news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                    image={discovery1}
                    title="Bauxite Ore Discovered in Niger State"
                    className="mt-4 border"
                  />
                  <MediaCard
                    news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                    image={discovery1}
                    title="Bauxite Ore Discovered in Niger State"
                    className="mt-4 border"
                  />
                </div>
              </div>
            </div>
            </div>
        
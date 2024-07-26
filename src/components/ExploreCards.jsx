import React from "react";

const ExploreCards = ({ world }) => {
  return (
    <div className="text-center w-full sm:mx-auto mt-16 shadow-xl text-gray-900 px-10 py-6 gradient-05 sm:p-8 rounded-lg border-black border-2 relative cursor-pointer hover:shadow-black">
      <div className="mx-auto w-32 h-32 relative -mt-[85px] border-4 border-white rounded-full overflow-hidden">
        <img
          src={world.imgUrl}
          alt=""
          className="object-cover object-center h-32"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-bold text-black">{world.title}</h2>
        <p className="text-black text-lg  mt-6">{world.description}</p>
      </div>
    </div>
  );
};

export default ExploreCards;
import React from "react";
import styles from "@/constants/styles";
import TitleText from "@/components/TitleText";
import { exploreWorlds } from "@/constants/appdata";
import ExploreCards from "@/components/ExploreCards";
const Explore =()=>{
    return(
       <section className="px-6 py-10 bg-gradient-to-t from-violet-400 to bg-slate-100 ">
          <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <TitleText title={<span className="text-gray-900 font-serif text-black">Why ride with us?</span>}/>
          </div>

          <div className=" flex lg:flex-row flex-col my-9 min-h-[50vh] gap-8 lg:mx-32">
            {exploreWorlds?.map((world,index)=>(<ExploreCards key={index} world={world}/>))}
          </div>
       </section>
    );
};
export default Explore;
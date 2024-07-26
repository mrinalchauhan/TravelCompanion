import React from "react";
import Banner from "@/components/Banner";
import Insights from "@/components/Insights";

const Services=()=>{
    return(
        <><div className="text-center ">
        <Banner img="/car3.png" title="" text=" " >

        </Banner>
        </div>
        <div className="relative bg-gradient-to-t from-violet-400  to-violet-200 p-6 ">
          <Insights isForm={false} />
        </div>
        </>
    )
}
export default Services;
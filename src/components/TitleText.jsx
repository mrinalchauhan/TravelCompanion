"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/constants/motion";
const TitleText=({title,textStyles})=>{
    return(
     <div>
         <motion.h2 variants={textVariant2}
                    initial="hidden"
                    whileInView="show"
                    className={`mt-4 p-6 text-black font-bold md:text-[64px] text-[36px] text-center ${textStyles}`}>
                    {title}
        </motion.h2>
     </div>
    );
};
export default TitleText;
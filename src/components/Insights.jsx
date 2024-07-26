"use client"
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import TitleText from "./TitleText";
import styles from "@/constants/styles";
import { insights } from "@/constants/appdata";
import InsightsCard from "./InsightsCard";
 
const Insights=({isForm, form})=>{
    return(
        <>
        <motion.div 
           variants={!isForm && staggerContainer}
           initial={!isForm && "hidden"}
           whileInView={!isForm && "show"}
           viewport={{ once: false, amount: 0.25 }}
           className={`${styles.innerWidth} mx-auto flex flex-col `}
           >
            {!isForm && <TitleText title={<> Our Services </>}/>}
            <div className="mt-12 flex flex-col gap-9">
        {insights?.map((insight, index) => (
          <InsightsCard
            key={index}
            {...insight}
            index={index}
            isForm={isForm}
            form={form}
          />
        ))}
      </div>
        </motion.div>
        </>

    )
}
export default Insights;
"use client";
import React from "react";
import { steps } from "@/constants/appdata";
import { useForm } from "react-hook-form";
import { StepOne } from "@/components/StepOne";
import Link from "next/link";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import StepFour from "@/components/StepFour";
const Booking =({searchParams})=>{
    const current= parseInt(searchParams.index)|| 1;
    const form = useForm();
    // Debugging logs
  console.log('searchParams:', searchParams);
  console.log('current:', current);
  console.log('steps:', steps);

    return(
    <div className="pt-20 bg-white  ">
        <h2 className="text-bold font-mono text-black text-center text-6xl"> Book Your Ride</h2>
    <div className=" lg:flex justify-center items-center mt-10 ml-20 pl-5 ">
        
    <div className="grid grid-cols-4 gap-5 mt-5 items-center w-[65%]">
        {steps?.map((item,index)=>(
            <div key={index}>
                <div className="flex  items-center gap-1"> 
                    <svg className="w-10 h-10 cursor-pointer" viewBox="0 0 38 38" fill=""  xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19C0 8.50547 8.50547 0 19 0C29.4945 0 38 8.50547 38 19C38 29.4945 29.4945 38 19 38C8.50547 38 0 29.4945 0 19ZM27.5945 15.7195C28.4035 14.9105 28.4035 13.5895 27.5945 12.7805C26.7855 11.9715 25.4645 11.9715 24.6555 12.7805L16.625 20.8109L13.3445 17.5305C12.5355 16.7215 11.2145 16.7215 10.4055 17.5305C9.59648 18.3395 9.59648 19.6605 10.4055 20.4695L15.1555 25.2195C15.9645 26.0285 17.2855 26.0285 18.0945 25.2195L27.5945 15.7195Z" 
                              fill={current >= index + 1 ? "#26d4e9" : "black"}/>
                    </svg>

                    {index!==3 && (<div className={`w-full h-0.5 ${current>index+1 ? "bg-third-color" : "bg-black"} rounded`} > </div>)}
                </div>

                <div className="items-center pt-5">
                <p className="w-full font-roboto  font-semibold text-sm uppercase my-2 text-black">STEP {index+1}</p>
                <p className="w-full font-roboto font-semibold text-sm uppercase my-2 text-black"> {item.name}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
    <div className="p-5">
        {current === 1 && <StepOne form ={form} />} 
        {current === 2 && <Insights form={form} isForm={true} />} 
        {current === 3 && <Contact form={form} />}
        {current === 4 && <StepFour form={form} />}
    </div>
         <div className={`${
          current == 4 ? "hidden" : "flex"} grid grid-cols-2  gap-10 px-[10%] py-3 `}>

            <Link href={`/booking?index=${current - 1}`} className="bg-slate-400 px-5 py-3 text-center font-bold rounded-full">BACK</Link>
            <Link href={`/booking?index=${current + 1}`} className="bg-blue-600 px-5 py-3 text-center font-bold rounded-full">NEXT</Link>

         </div>
       
    </div>
    );
};

export default Booking;
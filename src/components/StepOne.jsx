"use client";
import React, { useMemo, useState } from "react";
import { Form } from "@/components/ui/form";
import DateTimeForm from "@/components/DateTimeForm";
import  SelectForm  from "@/components/SelectForm";
import { pickupTime } from "@/constants/appdata";
import CitySelect from "./CitySelect";  
import { Country , State, City} from "country-state-city"; // using npm add country-state-city
import MapComponent from "@/components/Map";
import dynamic from "next/dynamic";

export const StepOne=({form})=>{
    const getCities=City?.getCitiesOfState("IN","BR");
    const[getSource,setSource]=useState(null);
    const[getDestination,setDestination]=useState(null);
     
    console.log(form?.getValues()); 
/* 1) to know about the functions related to cities
const getCities=City;
console.log(getCities); */

/* 2) console.log(Country)  we will get functions related to Country
      console.log(Country?.getAllCountries())  we will get all countries with its details like country code , etc..

/* 3) console.log(State)
      console.log(State?.getStateOFCountry()) */

/* similar functions
 getAllCities(keys = KEYS)
 getCitiesOfCountry(countryCode)
 getCitiesOfState(countryCode, stateCode)
 sortByStateAndName(cities)   
 */
 
 // usememo is used when you need to update a component
 const Map=useMemo(
    ()=>dynamic(()=> import("@/components/Map")),
    [getSource,getDestination]);
    return(
        <>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mx-10 md:mx-[10%] my-10  ">   {/*grid grid-cols-1 md:grid-cols-2}  when adding map do this for grid  */}
           <div className="border border-5 border-double shadow-black shadow-lg border-black">
            <Form {...form}>
              <form className="w-full  p-8 shadow-lg border-spacing-2 ">
                  <DateTimeForm id="pickupdate" label="Pick-Up Date" control={form.control}/>
                  <SelectForm id="pickup time" label="Pick-Up Time" placeholder="set pick up time " list={pickupTime} control={form.control}/>
                  <CitySelect id="source" label="Source" placeholder="select your starting city" list={getCities} setValue={setSource} control={form.control}/>
                  <CitySelect id="destination" label="Destination" placeholder="select your ending city" list={getCities} setValue={setDestination} control={form.control}/>
                  <SelectForm id="persons" label="Number of People" placeholder="select persons" list={[1,2,3,4,5,6]} control={form.control}/>
                  <SelectForm id="transfer type" label="Round Trip" placeholder="Round Trip" list={[ "one Way", "two way"]} control={form.control}/>
              </form>
            </Form>
            </div>

             {/* Map */}
            <div className="border border-5 border-double shadow-lg shadow-black border-black flex justify-start flex-col ">
               <MapComponent getSource={getSource} getDestination={getDestination}/>
            </div>
        </div>
        </>
    )
};

export default Map; // don't use export default here... while defining the function as const ..export there itself..else it will generate error that exports are not done correctly



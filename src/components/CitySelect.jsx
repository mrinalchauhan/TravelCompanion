"use client";
import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,

} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {format} from "date-fns";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const CitySelect = ({control, id, label , placeholder , list , setValue }) => {  // here in list we are geting cities detail but problem is that we are getting all details of cities and we need only latitude and longitude for map integration so here we will extract the usefull information that is longitude and latitude
    return (
        <div>
            <Label htmlFor={id} className="font-semibold text-md"> 
                {label}
            </Label>
            <FormField
                control={control}
                name={id}
                render={({ field }) => (
            <FormItem>
              <Select onValueChange={(val)=>{  // this whole part is important
                field.onChange(val);
                const res=val?.split(",");
                const result=[parseFloat(res[0]), parseFloat(res[1])];
                setValue(result);
              }}
               defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {list?.map((item,index)=>( <SelectItem key={index} value={`${item?.latitude}, ${item.longitude}`}>
                          {item.name}
                    </SelectItem>
                    ))} 
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        </div>
    );
};
export default CitySelect;  // export like this only here
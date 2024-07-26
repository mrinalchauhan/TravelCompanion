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

const SelectForm = ({control, id, label , placeholder , list}) => {
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {list?.map((item,index)=>( <SelectItem key={index} value={`${item}`}>{item}</SelectItem>
                    ))} 
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        </div>
    );
};
export default SelectForm;  // export like this only here
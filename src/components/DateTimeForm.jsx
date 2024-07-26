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

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
const DateTimeForm = ({control, id, label}) => {
    return (
        <div>
            <Label htmlFor={id} className="font-semibold text-md"> 
                {label}
            </Label>

            <FormField
                control={control} 
                name={id}
                render={({ field }) => (
                    <FormItem className="flex flex-col py-3">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            " pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
        
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                       
                    </FormItem>
                )}
            />
        </div>
    );
};
export default DateTimeForm;  //  export like this only here
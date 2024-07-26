"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card";

import autoplay from "embla-carousel-autoplay";
import { profile } from "@/constants/appdata";


const Carousels = () => {
    return (
        <div>
            <Carousel
                plugins={[
                    autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {profile?.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            style={{ backgroundImage: `url(${slide.img})` }}
                            className="w-full h-full bg-cover bg-center pt-5 top-9 bg-no-repeat relative pointer-events-none"
                        >
                            <div></div>
                            <div className="">
                                <Card className="bg-transparent border-none">
                                    <CardContent className="flex items-center justify-center p-6">
                                        <div className="h-[40vh] md:h-[60vh] flex lg:justify-center items-center flex-col relative">
                                            <h3 className="mb-1 lg:mb-5 flex items-center gap-6 text-2xl lg:text-5xl">
                                                <span className="text-third-color font-bold transition-[3s]">
                                                    {slide.title}
                                                </span>
                                            </h3>
                                            <p className="text-white text-sm md:text-4xl text-center w-10/12 md:w-8/12">
                                                <span>{slide.text}</span>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Carousels;
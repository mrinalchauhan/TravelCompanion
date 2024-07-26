// main home page
"use client";
import Carousels from "../components/Carousels";
import Explore from "../components/Explore";
import Image from "next/image";
import Services from "./services/page";
export default function Home() {
  return (
    <>
    <div className="bg-white ">
      <Carousels/>
      <div className="relative">
        
        <Explore/>
        <Services/>
      </div>
    </div>
    </>
  );
}

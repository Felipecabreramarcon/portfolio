"use client";
import DotGrid from "@/components/Backgrounds/DotGrid/DotGrid";
import LightRays from "@/components/Backgrounds/LightRays/LightRays";
import Header from "@/components/header";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Pointer } from "@/components/magicui/pointer";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const { scrollX } = useScroll();
  console.log(scrollX);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex flex-col transform-none relative h-[200vh]  items-center min-h-screen overflow-hidden "
    >
      {/* <LightRays
        raysOrigin="top-center"
        raysColor="var(--primary)"
        raysSpeed={0.5}
        lightSpread={0.5}
        rayLength={1.4}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0.2}
        distortion={0.05}
        className="custom-rays h-full"
      /> */}
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#99a1af"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={200}
        shockStrength={5}
        resistance={300}
        returnDuration={2}
        className="opacity-20"
      />
      <Header containerRef={containerRef} />
      {/* <BlurFade className="w-full"></BlurFade> */}
    </div>
  );
}

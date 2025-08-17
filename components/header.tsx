"use client";

import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { Row } from "./row";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ShinyButton } from "./magicui/shiny-button";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { RefObject, useState } from "react";
import { BorderBeam } from "./magicui/border-beam";
import { BlurFade } from "./magicui/blur-fade";

export default function Header({
  containerRef,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const [currentScroll, setCurrentScroll] = useState<number>(0);
  const { scrollY } = useScroll({ target: containerRef });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCurrentScroll(latest);
  });

  console.log(scrollY);
  return (
    <BlurFade
      className={cn(
        " w-[85%] fixed top-0 backdrop-blur-sm rounded-2xl  h-auto left-1/2 -translate-x-1/2 duration-400",
        currentScroll > 50
          ? "mt-0 rounded-t-none hover:my-2   hover:rounded-t-2xl"
          : "mt-5  "
      )}
    >
      <header
        className={cn(
          "flex relative z-50  mx-auto font-poppins rounded-2xl transition-all items-center justify-between p-6 bg-secondary-foreground dark:bg-secondary text-secondary dark:text-secondary-foreground",
          currentScroll > 50
            ? " rounded-t-none pt-2 opacity-50 hover:my-2 hover:pt-5 hover:opacity-100 hover:rounded-t-2xl"
            : " "
        )}
      >
        <Row className="gap-2">
          <Row className="[&_svg]:size-6 text-blue-700">
            <FaChevronLeft />
            <FaChevronRight />
          </Row>
          <h1 className="text-2xl font-medium">Marcon.Dev</h1>
        </Row>

        <Row className="justify-between [&_button]:border-none  [&_button]:bg-transparent ">
          <ShinyButton>About Me </ShinyButton>
          <ShinyButton>Projects </ShinyButton>
        </Row>

        <AnimatedThemeToggler />
        <BorderBeam
          duration={10}
          size={200}
          reverse
          className="from-transparent via-blue-600 to-transparent"
        />
      </header>
    </BlurFade>
  );
}

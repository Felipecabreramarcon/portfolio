"use client";

import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { Row } from "./row";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ShinyButton } from "./magicui/shiny-button";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { RefObject, useState } from "react";

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
    <header
      className={cn(
        "flex fixed top-0 left-1/2 -translate-x-1/2 duration-400 z-50 w-[80%] font-poppins rounded-2xl  transition-all items-center justify-between p-5 bg-secondary-foreground text-secondary",
        currentScroll > 100
          ? "mt-0 rounded-t-none pt-2 bg-secondary-foreground/50 hover:my-2 hover:pt-5 hover:bg-secondary-foreground hover:rounded-t-2xl"
          : "my-2  "
      )}
    >
      <Row className="gap-2">
        <Row className="[&_svg]:size-6 text-blue-700">
          <FaChevronLeft />
          <FaChevronRight />
        </Row>
        <h1 className="text-2xl font-medium">Marcon.Dev</h1>
      </Row>

      <Row className="justify-between">
        <ShinyButton className="border-none">About Me </ShinyButton>
        <ShinyButton className="border-none">Projects </ShinyButton>
      </Row>

      <AnimatedThemeToggler />
    </header>
  );
}

"use client";
import { Col } from "@/components/col";
import Header from "@/components/header";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { PixelImage } from "@/components/magicui/pixel-image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Row } from "@/components/row";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const { scrollX } = useScroll();
  console.log(scrollX);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex flex-col  transform-none relative h-[200vh] pt-32 items-center min-h-screen overflow-hidden "
    >
      <Header containerRef={containerRef} />
      <Row className="w-full bg-muted-foreground/15  h-[70vh]">
        <Row className="w-full justify-evenly">
          <NeonGradientCard borderRadius={1000} className="w-auto h-auto   ">
            <div className="size-full overflow-hidden w-full h-full rounded-[1000px]">
              <PixelImage src="/foto.jpg" customGrid={{ rows: 4, cols: 6 }} />
            </div>
          </NeonGradientCard>
          <Col className="w-1/2 h-full justify-start font-jet">
            <TypingAnimation className="text-muted-foreground font-medium text-2xl">
              Olá, sou o Felipe
            </TypingAnimation>
            <TypingAnimation className="leading-12 text-5xl">{`Mid-Level {Full Stack} Web Developer`}</TypingAnimation>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

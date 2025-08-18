"use client";
import ClickSpark from "@/components/Animations/ClickSpark/ClickSpark";
import MagnetLines from "@/components/Animations/MagnetLines/MagnetLines";
import { Col } from "@/components/col";
import Header from "@/components/header";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { PixelImage } from "@/components/magicui/pixel-image";
import ProgressiveBlur from "@/components/magicui/progressive-blur";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Row } from "@/components/row";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const { scrollX } = useScroll();
  console.log(scrollX);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ClickSpark
      sparkColor="gray"
      sparkSize={10}
      sparkRadius={20}
      sparkCount={15}
      duration={400}
    >
      <div
        ref={containerRef}
        className="flex flex-col relative h-[200vh] pt-32 items-center min-h-screen overflow-hidden "
      >
        <SmoothCursor />

        <Header containerRef={containerRef} />
        <ProgressiveBlur height="80%" position="bottom" />
        <Row className="w-full relative bg-secondary -z-10 rounded-lg  h-[50vh]">
          <BorderBeam
            duration={10}
            size={200}
            borderWidth={1.5}
            colorFrom="blue"
            colorTo="purple"
          />
          <Row className="w-full justify-evenly">
            <NeonGradientCard
              neonColors={{ firstColor: "blue", secondColor: "purple" }}
              borderRadius={1000}
              className="w-auto h-auto"
            >
              <div className="overflow-hidden w-full h-full rounded-[1000px]">
                <PixelImage src="/foto.jpg" customGrid={{ rows: 4, cols: 6 }} />
              </div>
            </NeonGradientCard>
            <Col className="w-1/2 h-full justify-start font-jet">
              <TypingAnimation
                duration={50}
                className="text-muted-foreground font-medium text-2xl"
              >
                Olá, sou o Felipe
              </TypingAnimation>
              <TypingAnimation
                delay={1000}
                duration={50}
                className="leading-12 text-4xl w-1/2"
              >{`Mid-Level {Full Stack} Web Developer`}</TypingAnimation>
            </Col>
          </Row>
        </Row>
      </div>
    </ClickSpark>
  );
}

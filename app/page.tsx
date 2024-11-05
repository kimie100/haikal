"use client";

import { IndexCarousel } from "@/components/index/carousel";
import { Introduction } from "@/components/index/introduction";
import { Objective } from "@/components/index/objective";
import { ServiceIndex } from "@/components/index/service";
import { TeamMember } from "@/components/index/team";
import { ParallaxSection } from "@/components/ParallaxSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  return (
    <>
      <main ref={containerRef} className=" min-h-screen min-w-full">
        {/* Hero Section with Parallax Background */}
        <div className="relative h-screen overflow-hidden">
          <motion.div
            style={{ opacity }}
            className="fixed inset-0 z-0"
          >
            <div className="w-full h-full bg-gradient-to-b from-purple-900 to-blue-900" />
          </motion.div>

          {/* Carousel Section */}
          <ParallaxSection speed={0.3} className="h-screen">
            <div className="container mx-auto px-4">
              <IndexCarousel />
            </div>
          </ParallaxSection>
        </div>

        {/* Services Section with Staggered Animation */}
        {/* <div className=" bg-white z-10">
          <ParallaxSection direction="left"
            fadeIn
            scale
            className="h-screen w-fit">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ServiceIndex btnName='View' goTo='/service' />
            </motion.div>
          </ParallaxSection>
        </div> */}
        <ParallaxSection
          direction="left"
          speed={0.7}
          className="h-screen bg-white"
        >
          <ServiceIndex btnName='View' goTo='/service' />
        </ParallaxSection>

        {/* Additional Sections */}
        {/* <ParallaxSection speed={0.4} className="min-h-screen bg-gray-100">
          {/* Additional content */}

        {/* </ParallaxSection> */}

        {/* Basic up/down parallax */}
        <ParallaxSection
          direction="up"
          speed={0.7}
          className="h-screen"
        >
          <Introduction />
        </ParallaxSection>
        <ParallaxSection
          direction="up"
          speed={0.7}
          className="h-screen bg-white"
        >
          <Objective />
        </ParallaxSection>
        {/* Fade in with scale */}

        <ParallaxSection
          direction="left"
          fadeIn
          scale
          className="h-screen "
        >
          <TeamMember />
        </ParallaxSection>


        {/* Mouse parallax with rotation
        <ParallaxSection
          mouseParallax
          rotate
          className="h-screen"
        >
          <div className="bg-purple-500 p-10">Interactive Content</div>
        </ParallaxSection> */}

      </main >

    </>
  );
}

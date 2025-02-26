"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    // Create a parallax effect on scroll
    gsap.to(background, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: background,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animate gradient on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;

      gsap.to(background, {
        backgroundPosition: `${x * 100}% ${y * 100}%`,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Animated background */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/50 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)] transition-all duration-300" />
      </div>

      <motion.div
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative z-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={item}
            className="mb-10 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-400 backdrop-blur-3xl"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500"
            />
            500+ Company-Specific Questions
          </motion.div>

          <motion.h1
            variants={item}
            className="bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text pb-4 text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Master the Tech Interview
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-xl text-zinc-400 md:text-2xl"
          >
            Practice with questions tailored to your dream company.
            <br className="hidden sm:inline" />
            Get hired faster with targeted preparation.
          </motion.p>

          <motion.div variants={item} className="mt-12">
            <Link href="/signup">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group relative h-14 px-10 text-lg bg-purple-500 text-white hover:bg-purple-600 rounded-lg"
                >
                  <motion.span className="relative z-10">
                    Start Practicing
                  </motion.span>
                  <motion.div
                    className="relative z-10 ml-2 inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 blur"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Target, LineChart } from "lucide-react";
import { useRef } from "react";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "Real Coding Environment",
    description: "Practice in a realistic IDE with syntax highlighting",
    icon: Code2,
  },
  {
    title: "Company Questions",
    description: "Questions from actual interviews at top companies",
    icon: Target,
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed analytics",
    icon: LineChart,
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative py-24 overflow-hidden"
    >
      <motion.div style={{ y }} className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Premium Features
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Everything you need to succeed
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-colors hover:border-purple-500/20 hover:bg-zinc-900/80"
            >
              <div className="relative z-10 flex h-full flex-col p-8">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <feature.icon className="h-8 w-8 text-purple-400" />
                </motion.div>
                <motion.h3
                  className="mt-4 text-xl font-semibold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="mt-2 text-zinc-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </div>
              <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

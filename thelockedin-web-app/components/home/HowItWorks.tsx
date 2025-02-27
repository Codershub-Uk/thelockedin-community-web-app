"use client";

import { motion } from "framer-motion";
import type { Step } from "@/types";

const steps: Step[] = [
  {
    title: "Create Account",
    description: "Quick sign-up process to get started",
    step: "01",
  },
  {
    title: "Pick Companies",
    description: "Select your target companies",
    step: "02",
  },
  {
    title: "Start Practicing",
    description: "Solve problems and track progress",
    step: "03",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <motion.div
        className="container relative"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="mx-auto max-w-2xl text-center" variants={item}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How it Works
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Three simple steps to interview success
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 transition-colors hover:border-purple-500/20 hover:bg-zinc-900/80"
            >
              <div className="relative z-10 flex h-full flex-col p-8">
                <motion.span
                  className="text-sm font-medium text-purple-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  Step {item.step}
                </motion.span>
                <motion.h3
                  className="mt-4 text-xl font-semibold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="mt-2 text-zinc-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.2 }}
                >
                  {item.description}
                </motion.p>
              </div>
              <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                initial={{ opacity: 0 }}
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

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { companies } from "@/lib/constants/companies";
import type { Company } from "@/types";

export function CompanyCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    const scrollerContent = Array.from(scrollerInnerRef.current.children);

    // Reset any existing content
    scrollerInnerRef.current.innerHTML = "";

    // Double the items for seamless loop
    [...scrollerContent, ...scrollerContent].forEach((item) => {
      scrollerInnerRef.current?.appendChild(item.cloneNode(true));
    });

    // Start the animation when ready
    scrollerRef.current.setAttribute("data-animated", "true");
  }, []);

  return (
    <section ref={sectionRef} id="companies" className="py-32 md:py-40">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Trusted by Top Companies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-zinc-400"
          >
            Practice with questions from leading tech companies worldwide
          </motion.p>
        </div>
      </div>
      <motion.div style={{ opacity }} className="relative mt-16">
        <div
          ref={scrollerRef}
          className="group relative max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          <div
            ref={scrollerInnerRef}
            className="flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap items-center justify-start [&>*]:mx-0 animate-scroll group-hover:[animation-play-state:paused]"
          >
            {companies.map((company, idx) => (
              <CompanyLogo key={`${company.name}-${idx}`} company={company} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CompanyLogo({ company }: { company: Company }) {
  return (
    <div className="w-[180px] flex items-center justify-center">
      <div className="relative group rounded-lg p-4 hover:bg-white/5 transition-colors">
        <Image
          src={company.logo || "/placeholder.svg"}
          alt={company.name}
          width={120}
          height={40}
          className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
        />
      </div>
    </div>
  );
}

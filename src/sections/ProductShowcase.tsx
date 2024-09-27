"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Diffusion & Language Modeling",
    inverse: false,
    features: [
      "Custom HyperParameter FineTuning (LoRA, QLoRA)",
      "Language Processing, Summarization, and Classification",
      "Stable Diffusion, Image Scaling, and 3D Reconstruction"
    ],
  },
  {
    title: "Classic ML Modeling",
    inverse: true,
    features: [
      "Time Series Forecasting, Regression, and Clustering",
      "Pipeline Optimization and Neural Networks",
      "Data Transformation and Compound Analysis"
    ],
  },
  {
    title: "Computer Vision & Vision Language Modeling",
    inverse: false,
    features: [
      "Image Classification, Object Detection, and Pose Estimation",
      "Image Captioning, Depth Estimation and Face Recognition",
      "Visual Question Answering, Optical Character Recognition"
    ],
  },
  {
    title: "Audio Modeling",
    inverse: true,
    features: [
      "Text-to-Speech, Audio Classification, and Voice Cloning",
"Generative Music Composition, Auto Speech Recognition"
    ],
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#000000] to-[#343a40] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white to-[#3a3a3a] text-transparent bg-clip-text mt-5">
            Take your Business to the next level with AI
          </h2>
          <p className="section-des mt-5">
          At aXtrLabs, we create custom AI solutions tailored to your business needs, delivering innovative applications designed to meet and exceed your expectations with precision and creativity.
          </p>
        </div>

        <div className="relative"><div className="flex flex-col gap-6 min-h-full items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, features, inverse }) => (
            <div
              key={title}
              className={twMerge(
                "p-10 rounded-3xl border border-[#F1F1F1] bg-white h-full  max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>

              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
              </div>

              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-64"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

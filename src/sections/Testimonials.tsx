"use client";
import React, { use } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {"text": "Image Classification", "username": "user_zvjw57bv"},
  {"text": "Object Detection", "username": "user_n5a1q5d4"},
  {"text": "Image Segmentation", "username": "user_whje6n7k"},
  {"text": "Face Recognition", "username": "user_r8n4gp3n"},
  {"text": "Depth Estimation", "username": "user_twishr7n"},
  {"text": "Image Captioning", "username": "user_9d2etzq8"},
  {"text": "Image Embedding", "username": "user_ix2s70a3"},
  {"text": "Pose Estimation", "username": "user_mrxg2uft"},
  {"text": "Video Summarization", "username": "user_9zz1py2l"},
  {"text": "Open Vocabulary Object Detection", "username": "user_k5rtshng"},
  { "text": "Image Feature Extraction", "username": "PixelPusher123" },
  { "text": "Image Masking", "username": "VisualWizard78" },
  { "text": "Visual Question Answering", "username": "ColorCoder99" },
  { "text": "Optical Character Recognition [OCR]", "username": "TextExtractor77" },
  { "text": "Open Vocabulary Object Segmentation", "username": "ObjectMapper66" },
  { "text": "Simultaneous Localization and Mapping [SLAM]", "username": "SpaceNavigator55" },
  { "text": "Keypoint Detection", "username": "PointFinder44" },
  { "text": "Segmentation", "username": "Divider33" },
  { "text": "Video Classification", "username": "FrameAnalyzer22" },
  { "text": "Text 2 Speech", "username": "VoiceGenerator123" },
  { "text": "Text 2 Audio", "username": "SoundCreator456" },
  { "text": "Audio 2 Audio", "username": "AudioConverter789" },
  { "text": "Voice Recognition", "username": "SpeechRecognizer111" },
  { "text": "Audio Classification", "username": "SoundCategorizer222" },
  { "text": "Vocal Sentiment Analysis", "username": "EmotionDetector333" },
  { "text": "Voice Cloning", "username": "VoiceMimic444" },
  { "text": "Auto Speech Recognition", "username": "AutomaticTranscriber555" },
  { "text": "Audio Generation", "username": "SoundProducer666" },
  { "text": "Generative Music Composition", "username": "MusicComposer777" },
  { "text": "Pitch Recognition", "username": "ToneAnalyzer888" },
  { "text": "Part of Speech [POS] Tagging", "username": "LanguageProcessor999" }
]
;

const firstColumn = testimonials.slice(0, 8);
const secondColumn = testimonials.slice(8, 16);
const thirdColumn = testimonials.slice(16, 24);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({text,username}) => (
                <div className="bg-white section-des text-black w-full card" key={username}>
                  <div>{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
          </div>

          <h2 className="section-title mt-5">What we do</h2>
          <p className="section-des mt-5">
            From intuitive design to powerful features, we provide state of the art solutions for your AI needs.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

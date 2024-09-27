"use client";
import claudeLogo from "@/assets/logo-claude.png";
import cohereLogo from "@/assets/logo-cohere.png";
import langchainLogo from "@/assets/logo-langchain.png";
import llamaIndexLogo from "@/assets/logo-llamaindex.png";
import Logoiii from "@/assets/logo-lll.png";
import mistralLogo from "@/assets/logo-mistral.png";
import openaiLogo from "@/assets/logo-openai.png";
import palm2Logo from "@/assets/logo-palm2.png";
import pytorchLogo from "@/assets/logo-pytorch.png";
import stabilityLogo from "@/assets/logo-stability.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType:"loop",
            }}
          >
<Image src={claudeLogo} alt="Claude logo" className="logo-ticker-image" />
<Image src={cohereLogo} alt="Cohere logo" className="logo-ticker-image" />
<Image src={langchainLogo} alt="Langchain logo" className="logo-ticker-image" />
<Image src={llamaIndexLogo} alt="Llama Index logo" className="logo-ticker-image" />
<Image src={Logoiii} alt="III logo" className="logo-ticker-image" />
<Image src={mistralLogo} alt="Mistral logo" className="logo-ticker-image" />
<Image src={openaiLogo} alt="OpenAI logo" className="logo-ticker-image" />
<Image src={palm2Logo} alt="Palm 2 logo" className="logo-ticker-image" />
<Image src={pytorchLogo} alt="PyTorch logo" className="logo-ticker-image" />
<Image src={stabilityLogo} alt="Stability AI logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

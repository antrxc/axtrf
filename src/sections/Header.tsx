import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      

      <div className="py-5 ">
        <div className="container">
          <div className="flex items-center justify-between ">
            <Image src={Logo} alt="Saas logo" height={64} width={64} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className=" navbar hidden md:flex gap-6 text-white/60 items-center">
              <a href="#hero" >About</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Expertise</a>
              <a href=""><button className="btn bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get in Touch
              </button></a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

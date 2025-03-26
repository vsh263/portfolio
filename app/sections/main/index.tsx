import TypingText from "@/components/animata/text/typing-text";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function MainSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[100vh] pb-[20vh]">
      <h2 className="text-6xl text-[#565988] flex flex-col gap-1">
        <span className="text-4xl text-black font-mono">Hello there! 👋</span>
        <br />
        <TypingText
          delay={50}
          text="I'm Vaishnav Nair"
          repeat={false}
          cursor={false}
        />
      </h2>
      <div className="max-w-[600px] text-lg text-center">
        I’m a software engineer constantly exploring new ways to build amazing
        applications, integrating AI and focusing on user experiences. I have
        the most fun figuring out solutions to problems and enjoy learning new
        things in the process.
      </div>
      <div>
        <Link href="#about">
          <AnimatedButton effect="shineHover">
            More about me <ArrowDown />
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
}

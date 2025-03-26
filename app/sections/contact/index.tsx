import { Button } from "@/components/ui/button";
import { GithubIcon, Linkedin, MailboxIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <div className="flex flex-col gap-4 mt-40 items-center" id="contact">
      <h1 className="text-4xl font-mono font-semibold">Let's Connect</h1>
      <div className="flex flex-row gap-4 justify-center mt-6">
        <Link href="https://linkedin.com/in/vsh-n" target="_blank">
          <Button
            variant="outline"
            className="h-34 w-34 bg-[#0A65C1] text-lg text-white hover:cursor-pointer"
          >
            <Linkedin size={"30px"} /> LinkedIn
          </Button>
        </Link>
        <Link href="mailto:vaishnavjknair@gmail.com" target="_blank">
          <Button
            variant="outline"
            className="h-34 w-34 bg-[#CD3B2F] text-lg text-white hover:cursor-pointer"
          >
            <MailIcon size={"30px"} /> Email
          </Button>
        </Link>
        {/* <Link href="https://github.com/vsh263" target="_blank">
          <Button
            variant="outline"
            className="h-34 w-34 bg-[#0C1016] text-lg text-white hover:cursor-pointer"
          >
            <GithubIcon size={"30px"} /> GitHub
          </Button>
        </Link> */}
      </div>
    </div>
  );
}

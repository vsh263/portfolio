"use client";

import { useCallback, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function calculateCardRotation({
  currentX,
  currentY,
  centerX,
  centerY,
  maxRotationX,
  maxRotationY,
}: {
  currentX: number;
  currentY: number;
  centerX: number;
  centerY: number;
  maxRotationX: number;
  maxRotationY: number;
}) {
  // Calculate the distance from the center
  const deltaX = currentX - centerX;
  const deltaY = currentY - centerY;

  // Calculate the maximum distance (assuming a rectangular area)
  const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
  // Calculate the actual distance
  const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  // Calculate the rotation factor (0 to 1)
  const rotationFactor = distance / maxDistance;

  // Calculate rotations (inverted for natural tilt effect)
  const rotationY = (
    (-deltaX / centerX) *
    maxRotationY *
    rotationFactor
  ).toFixed(2);
  const rotationX = (
    (deltaY / centerY) *
    maxRotationX *
    rotationFactor
  ).toFixed(2);
  return { rotationX, rotationY };
}

export default function ExperienceCardOne({
  className,
}: {
  className?: string;
}) {
  const resetRef = useRef<NodeJS.Timeout>(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!containerRef.current) {
      return;
    }

    const { width, height } = containerRef.current.getBoundingClientRect();

    if (width < 900) {
      return;
    }

    const { rotationX, rotationY } = calculateCardRotation({
      centerX: width / 2,
      centerY: height / 2,
      currentX: x,
      currentY: y,
      maxRotationX: 3,
      maxRotationY: 6,
    });
    containerRef.current.style.setProperty(
      "--x",
      `${Number(rotationX) / 4}deg`,
    );
    containerRef.current.style.setProperty(
      "--y",
      `${Number(rotationY) / 4}deg`,
    );
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex max-w-1200 transform-gpu flex-col gap-4 rounded-3xl border border-border bg-zinc-700 p-10 text-zinc-200 shadow-lg transition-transform ease-linear will-change-transform",
        className,
      )}
      style={{
        transform: "perspective(400px) rotateX(var(--x)) rotateY(var(--y))",
        transitionDuration: "50ms",
      }}
      onMouseEnter={() => {
        resetRef.current = setTimeout(() => {
          if (!containerRef.current) {
            return;
          }

          // Reset the transition duration to 0 so that the mouse movement is smooth
          containerRef.current.style.transitionDuration = "0ms";
        }, 300);
      }}
      onMouseLeave={() => {
        clearTimeout(resetRef.current);
        if (!containerRef.current) {
          return;
        }

        containerRef.current.style.transitionDuration = "50ms";
        containerRef.current.style.setProperty("--x", "0deg");
        containerRef.current.style.setProperty("--y", "0deg");
      }}
    >
      <h1 className="font-mono text-3xl tracking-tight">appleute GmbH</h1>

      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-medium text-zinc-400">Software Engineer</p>
        <p className="text-md font-medium text-zinc-400">Aug 2023 - Jan 2025</p>
      </div>

      <span>
        <ul className="flex flex-col gap-2 text-lg">
          <li className="list-disc">
            Managed agile development sprints, including planning, daily
            stand-ups, and retrospectives. Oversaw a team of interns, managing
            project scope and ensuring timely delivery.
          </li>
          <li className="list-disc">
            Engineered AI-powered chatbot solutions, integrating OpenAI APIs for
            conversational capabilities, streamlining user interactions, and
            enabling complex workflows such as order management and live chat
            integration with Hubspot CRM, leading to a 40% increase in
            productivity and order conversion rates.
          </li>
          <li className="list-disc">
            Designed and developed scalable back-end systems using NestJS to
            manage data integration between multiple stakeholders, including
            handling CSV data processing and database synchronization.
          </li>
          <li className="list-disc">
            Developed and deployed dynamic front-end applications for ATRIUM
            Berlin utilizing NextJS, Refine, and Ant Design to deliver intuitive
            user interfaces and robust admin dashboards. Key features included:
            course booking, course management, appointment scheduling, highly
            detailed filtering capabilities, course room and instructor
            management, a calendar view for course and appointment
            visualization, and public-facing content including a blog, news
            section, and course filtering page, amongst several other features
            and nice to haves.
          </li>
          <li className="list-disc">
            Orchestrated full-stack development for time-sensitive projects,
            delivering functional prototypes and final solutions under tight
            deadlines while ensuring robust design and functionality.
          </li>
          <li className="list-disc">
            Integrated third-party services such as Stripe and Shopify,
            leveraging webhook systems to automate e-commerce transactions and
            order creation.
          </li>
        </ul>
      </span>

      <span className="flex flex-row flex-wrap mt-4 gap-2 mb-6">
        <Badge>Typescript</Badge>
        <Badge>Next.js</Badge>
        <Badge>NestJS</Badge>
        <Badge>React Native</Badge>
        <Badge>Refine</Badge>
        <Badge>Deployment</Badge>
        <Badge>Nginx</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>Prisma ORM</Badge>
        <Badge>Git</Badge>
        <Badge>AWS</Badge>
        <Badge>AntDesign</Badge>
        <Badge>MUI</Badge>
        <Badge>Figma</Badge>
        <Badge>Sprint Management</Badge>
        <Badge>Project Scoping</Badge>
        <Badge>Documentation</Badge>
      </span>

      <div className="flex flex-row justify-between items-center mt-8">
        <p className="text-xl font-medium text-zinc-400">
          Junior Software Engineer
        </p>
        <p className="text-md font-medium text-zinc-400">
          Jan 2023 - July 2023
        </p>
      </div>

      <span>
        <ul className="flex flex-col gap-2 text-lg">
          <li className="list-disc">
            Redesigned application interfaces to align with current web
            standards, resulting in a significantly improved user experience
            (UX) and enhanced accessibility.
          </li>
          <li className="list-disc">
            Re-wrote legacy code-bases utilizing established coding standards
            and best practices, improving readability, reducing technical debt,
            and increasing developer efficiency.
          </li>
          <li className="list-disc">
            Created a comprehensive admin panel and intuitive end-user
            interfaces.
          </li>
          <li className="list-disc">
            Designed and implemented key features for a React Native
            application, leveraging Expo for rapid development and optimizing
            the customer experience.
          </li>
          <li className="list-disc">
            Engineered in-app purchase and subscription functionalities for free
            and premium users using React Native and Expo, ensuring a solid
            monetization strategy.
          </li>
        </ul>
      </span>

      <span className="flex flex-row flex-wrap mt-4 gap-2 mb-6">
        <Badge>Typescript</Badge>
        <Badge>Next.js</Badge>
        <Badge>NestJS</Badge>
        <Badge>React Native</Badge>
        <Badge>Refine</Badge>
        <Badge>Tauri</Badge>
        <Badge>MySQL</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>Prisma ORM</Badge>
        <Badge>Git</Badge>
        <Badge>AWS</Badge>
        <Badge>AWS Lambda</Badge>
        <Badge>Bootstrap</Badge>
        <Badge>AntDesign</Badge>
      </span>

      <hr />

      <h1 className="font-mono text-3xl tracking-tight mt-6">
        Tata Consultancy Services
      </h1>

      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-medium text-zinc-400">
          Software Developer - Intern
        </p>
        <p className="text-md font-medium text-zinc-400">Jul 2022 - Sep 2022</p>
      </div>

      <span>
        <ul className="flex flex-col gap-2 text-lg">
          <li className="list-disc">
            Spearheaded the development of an AI-powered chat-bot during the
            emergence of LLMs, enabling project managers to effectively pitch
            innovative solutions.
          </li>
        </ul>
      </span>

      <span className="flex flex-row flex-wrap mt-4 gap-2 mb-6">
        <Badge>JavaScript</Badge>
        <Badge>Python</Badge>
        <Badge>React.js</Badge>
        <Badge>Flask</Badge>
        <Badge>MUI</Badge>
      </span>

      <hr />

      <h1 className="font-mono text-3xl tracking-tight mt-6">
        Hackathon - Manipal Institute of Technology
      </h1>

      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-medium text-zinc-400">Software Developer</p>
        <p className="text-md font-medium text-zinc-400">Jan 2022</p>
      </div>

      <span>
        <ul className="flex flex-col gap-2 text-lg">
          <li className="list-disc">
            Developed a front-end web application that logs data, calculates and
            diagnoses conditions based on data remotely transmitted from a
            hardware device. This device monitors the user’s health conditions,
            analyzing factors such as pulse, SpO2, and blood pressure.
          </li>
        </ul>
      </span>

      <span className="flex flex-row flex-wrap mt-4 gap-2 mb-6">
        <Badge>JavaScript</Badge>
        <Badge>React.js</Badge>
        <Badge>Express.js</Badge>
        <Badge>Bootstrap</Badge>
      </span>
    </div>
  );
}

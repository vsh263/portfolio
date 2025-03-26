import ExperienceCardOne from "@/components/animata/card/github-card-skew";

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-4 mt-40" id="experience">
      <h1 className="text-4xl font-mono font-semibold">Experience</h1>
      <ExperienceCardOne className="mt-6" />
    </div>
  );
}

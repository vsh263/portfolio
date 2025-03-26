import Link from "next/link";

export function AboutSection() {
  return (
    <div className="flex flex-col gap-4" id="about">
      <h1 className="text-4xl font-mono font-semibold">About Me</h1>
      <h4 className="text-xl font-sans font-medium">Professional</h4>
      <span className="text-lg">
        I have been working as a full-stack software engineer with nearly 3
        years of industrial experience, and my natural habitat is an Agile
        environment. As my role suggests, I provide contributions to projects
        from its inception, that means all the way from concept to design to
        project scoping, solving problems, managing the workflow of the project,
        most of all contributing to the core development, working on several
        features as well as the deployment. So, I am capable of taking care of
        just about everything and not just the technical bits. I have
        contributed to 9 different projects during my career, ranging from small
        mobile applications to enterprise-grade multi-platform applications,
        along with API development and AI fueled integrations. I am not afraid
        to touch technologies that are beyond my understanding because it gives
        me an opportunity to learn, and that's what keeps me going. I am looking
        to explore more about RAG (Retrieval-Augmented Generation) and Agentic
        AI. Additionally, I have co-founded a SaaS business which you can check
        out{" "}
        <Link
          href={"https://nmcorp.io"}
          className="text-[#565988] font-semibold underline"
          target="_blank"
        >
          over here [work-in-progress]
        </Link>
        {". "}
        <br />I have a bachelor's degree in Electronics and Instrumentation
        Engineering from Manipal Institute of Technology (Manipal, India) with a
        minor in Data Science.
      </span>
      <h4 className="text-xl font-medium">Personal</h4>
      <span className="text-lg">
        I decided to split my "About me" section into 2 parts to keep it to the
        point, so this one's more about <i>me</i>. I have always been passionate
        about software since a very young age, I started off with writing little
        scripts and mods for video games I used to play back when I was 13 years
        old, I used to host game servers on linux VPS's for gaming communities
        too. At the age of 15 I started messing around with Wordpress, I picked
        up a little bit of PHP in the process to modify plugins, templates and
        even created a template of my own. Around the same time I had a growing
        interest for scraping data, so I would write python scripts that would
        scrape content off of several websites, I used to challenge myself by
        picking out sites one after another but each time I picked I ensured the
        difficulty was increased and then proceeded to write a script to scrape
        the raw data, and store it in a structured manner. About a year later I
        picked up JavaScript along with React and Express, I was freelancing for
        about 2 years, always learning something new in the process. I am always
        geeking out about technologies that have to do with games, I'd indulge
        myself more about how things work rather than the game itself, so if you
        have questions about how anti-aliasing works and the different kinds of
        anti-aliasing or about image or video upscaling or about lighting or
        reflections or about post-processing or (... i could go on but I won't),
        I am your guy. I used to play the piano from the age of 6 to 15 (I
        participated and won in several instrumental competitions over the
        years) and during my university years I even got into producing a few
        tracks on FL Studio. Badminton, Squash and Basketball were my go-to
        sports during school. I have a lot more to say but I will stop right
        here.
      </span>
    </div>
  );
}

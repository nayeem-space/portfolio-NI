import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiGit,
  SiGitlab,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiNeo4J,
  SiNextdotjs,
  SiNodedotjs,
  SiOpensearch,
  SiPytorch,
  SiReact,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { HiArrowDown, HiArrowRight, HiChevronDown } from "react-icons/hi";
import {
  HiOutlineCamera,
  HiOutlineCircleStack,
  HiOutlineCog6Tooth,
  HiOutlineCpuChip,
  HiOutlineDocumentText,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
  HiOutlineViewfinderCircle,
} from "react-icons/hi2";
import { Contact } from "@/components/contact";
import { MotionEntrance } from "@/components/motion-entrance";
import { Projects } from "@/components/projects";
import { PythonLogo } from "@/components/python-logo";
import { Heading, Section } from "@/components/section";
import { Timeline, TimelineEntry, TimelineMeta } from "@/components/timeline";
import {
  education,
  experiences,
  expertise,
  profile,
  projects,
  skillGroups,
} from "@/content/portfolio";

const skillIcons: Partial<Record<string, { Icon: IconType; color?: string }>> =
  {
    AWS: { Icon: FaAws, color: "#232f3e" },
    "Amazon Bedrock": { Icon: HiOutlineCpuChip, color: "#2b556e" },
    "C# / .NET": { Icon: SiDotnet, color: "#512bd4" },
    "C++": { Icon: SiCplusplus, color: "#00599c" },
    Django: { Icon: SiDjango, color: "#092e20" },
    Docker: { Icon: SiDocker, color: "#2496ed" },
    FastAPI: { Icon: SiFastapi, color: "#009688" },
    Git: { Icon: SiGit, color: "#f03c2e" },
    "GitLab CI/CD": { Icon: SiGitlab, color: "#fc6d26" },
    JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
    "LangChain / LangGraph": { Icon: SiLangchain, color: "#7fc8ff" },
    Linux: { Icon: SiLinux, color: "#fcc624" },
    Neo4j: { Icon: SiNeo4J, color: "#4581c3" },
    "Next.js": { Icon: SiNextdotjs, color: "#000000" },
    "Node.js": { Icon: SiNodedotjs, color: "#5fa04e" },
    OpenSearch: { Icon: SiOpensearch, color: "#005eb8" },
    "Pants Build": { Icon: HiOutlineCog6Tooth, color: "#2b556e" },
    Python: { Icon: PythonLogo },
    PyTorch: { Icon: SiPytorch, color: "#ee4c2c" },
    React: { Icon: SiReact, color: "#61dafb" },
    SQL: { Icon: HiOutlineCircleStack, color: "#2b556e" },
    Terraform: { Icon: SiTerraform, color: "#844fba" },
    TypeScript: { Icon: SiTypescript, color: "#3178c6" },
    Camera: { Icon: HiOutlineCamera, color: "#315f87" },
    Deployment: { Icon: HiOutlineRocketLaunch, color: "#ad631b" },
    Documents: { Icon: HiOutlineDocumentText, color: "#ad631b" },
    Model: { Icon: HiOutlineCpuChip, color: "#8053bf" },
    Security: { Icon: HiOutlineShieldCheck, color: "#128370" },
    Segmentation: { Icon: HiOutlineSquares2X2, color: "#8053bf" },
    Workflow: { Icon: HiOutlineCog6Tooth, color: "#128370" },
    YOLO: { Icon: HiOutlineViewfinderCircle, color: "#2b556e" },
  };

const heroSkills = [
  {
    name: "Python",
    placement: "lg:[grid-area:1/1/5/6] lg:size-24 lg:[--logo-size:2.5rem]",
  },
  {
    name: "AWS",
    placement: "lg:[grid-area:1/7/4/12] lg:size-19 lg:[--logo-size:2.25rem]",
  },
  {
    name: "LangChain / LangGraph",
    size: "size-26 [--logo-size:1.75rem]",
    placement: "lg:[grid-area:4/4/8/10] lg:size-27 lg:[--logo-size:2.25rem]",
  },
  {
    name: "OpenSearch",
    size: "size-25",
    placement: "lg:[grid-area:4/10/7/13]",
  },
  { name: "GitLab CI/CD", placement: "lg:[grid-area:7/1/10/5] lg:size-22" },
  {
    name: "Docker",
    placement: "lg:[grid-area:8/8/12/13] lg:size-24 lg:[--logo-size:2.5rem]",
  },
  { name: "React", placement: "lg:[grid-area:10/3/13/8] lg:size-18" },
];

const expertiseIcons: Partial<Record<string, readonly string[]>> = {
  "agentic-ai": ["Python", "LangChain / LangGraph", "Model", "Workflow"],
  "large-language-models": ["Documents", "OpenSearch", "Neo4j", "SQL"],
  "cloud-architecture": ["AWS", "Terraform", "Linux", "Security"],
  "devops-ci-cd": ["GitLab CI/CD", "Pants Build", "Docker", "Deployment"],
  "computer-vision": ["Camera", "YOLO", "PyTorch", "Segmentation"],
  "web-development": ["C# / .NET", "React", "TypeScript", "SQL"],
};

export default function HomePage() {
  return (
    <main>
      <Section id="home">
        <header className="grid items-center gap-8 lg:min-h-[31rem] lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_23rem]">
          <div className="mx-auto w-full min-w-0 max-w-[34rem] text-left">
            <MotionEntrance entrance="left" revealOnScroll="replay">
              <h1
                id="home-title"
                className="font-sans text-[clamp(3rem,6vw,6rem)] leading-[0.95] font-extrabold tracking-tight text-on-navy"
              >
                {profile.name}
              </h1>
            </MotionEntrance>
            <MotionEntrance
              entrance="heroCopy"
              delay={0.32}
              revealOnScroll="replay"
            >
              <p className="mt-4 flex items-center gap-2.5 text-base font-semibold text-accent-hover sm:text-xl">
                <span
                  aria-hidden="true"
                  className="h-px w-4 shrink-0 bg-current"
                />
                {profile.role}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-on-navy/80 sm:text-lg">
                I design and build production AI systems, specialising in
                agentic workflows, retrieval-augmented generation (RAG), vector
                retrieval, and knowledge graphs.
              </p>
            </MotionEntrance>
            <MotionEntrance
              delay={0.55}
              revealOnScroll="replay"
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-5 py-2 font-bold text-on-accent transition-colors hover:bg-accent-hover"
              >
                View projects <HiArrowRight aria-hidden="true" />
              </a>
              <a
                href="#experience"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-on-navy/30 px-5 py-2 font-semibold text-on-navy transition-colors hover:bg-on-navy/10"
              >
                Experience <HiArrowDown aria-hidden="true" />
              </a>
            </MotionEntrance>
          </div>
          <ul
            aria-label="Featured technologies"
            className="flex flex-wrap items-center justify-center gap-3 lg:grid lg:h-[23rem] lg:grid-cols-12 lg:grid-rows-12 lg:gap-0"
          >
            {heroSkills.map(({ name, size = "size-22", placement }, index) => {
              const icon = skillIcons[name];
              if (!icon) return null;

              return (
                <MotionEntrance
                  as="li"
                  key={name}
                  entrance="depth"
                  revealOnScroll="replay"
                  delay={0.3 + index * 0.085}
                  className={`flex shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 bg-[#eee8dd] p-2.5 text-center text-xs leading-tight font-medium text-[#41505a] shadow-[0_8px_24px_#0003] lg:place-self-center ${size} ${placement}`}
                >
                  <icon.Icon
                    aria-hidden="true"
                    color={icon.color}
                    className="size-[var(--logo-size,2rem)] shrink-0"
                  />
                  <span className="max-w-full text-balance">{name}</span>
                </MotionEntrance>
              );
            })}
          </ul>
        </header>
      </Section>

      <Section id="about">
        <Heading section="about">Expertise</Heading>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {expertise.map((area, index) => (
            <MotionEntrance
              as="li"
              key={area.id}
              className="sm:row-span-3 sm:grid sm:grid-rows-subgrid sm:gap-y-0"
              revealOnScroll
              entrance="lift"
              delay={0.08 + (index % 3) * 0.06}
            >
              <article className="h-full rounded-2xl border border-line bg-linear-to-br from-card to-paper/65 p-5 shadow-sm sm:row-span-3 sm:grid sm:grid-rows-subgrid sm:gap-y-0 sm:p-7">
                <div className="border-b border-accent/30 pb-3">
                  <h3 className="border-l-2 border-accent pl-3 text-xl leading-tight font-extrabold tracking-tight text-ink lg:text-2xl">
                    {area.title}
                  </h3>
                </div>
                <div
                  aria-hidden="true"
                  className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-xl bg-linear-to-r from-navy to-blue px-3 py-8.5 sm:gap-3 lg:py-9"
                >
                  {expertiseIcons[area.id]?.map((name) => {
                    const icon = skillIcons[name];
                    if (!icon) return null;

                    return (
                      <span
                        key={name}
                        className="grid size-10 shrink-0 place-items-center rounded-lg bg-on-navy shadow-sm lg:size-12"
                      >
                        <icon.Icon
                          color={icon.color}
                          className="size-6 lg:size-7"
                        />
                      </span>
                    );
                  })}
                </div>
                <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-muted lg:text-base">
                  {area.description}
                </p>
              </article>
            </MotionEntrance>
          ))}
        </ul>
      </Section>

      <Timeline id="experience" title="Experience">
        {experiences.map((experience, index) => (
          <TimelineEntry key={experience.id} featured={index === 0}>
            <details
              open
              className={`group rounded-2xl border lg:w-[85%] ${index === 0 ? "border-accent/55 bg-accent-soft/55" : "border-line/75 bg-surface"}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                <span className="grid min-w-0 flex-1 gap-1">
                  <span className="text-lg leading-tight font-extrabold sm:text-xl">
                    {experience.role}
                  </span>
                  <TimelineMeta
                    dates={experience.dateRange}
                    location={experience.location}
                  />
                  <span className="text-base font-semibold text-accent-text sm:text-lg">
                    {experience.company}
                    {experience.employmentType && (
                      <span className="text-sm font-medium text-muted sm:text-base">
                        {" | "}
                        {experience.employmentType}
                      </span>
                    )}
                  </span>
                </span>
                <HiChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted group-open:rotate-180 motion-safe:transition-transform"
                />
              </summary>
              <div className="px-4 pb-5 sm:px-5">
                <ul className="list-disc space-y-1 pl-5 leading-relaxed text-muted">
                  {experience.responsibilities.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </details>
          </TimelineEntry>
        ))}
      </Timeline>

      <Section id="work">
        <Heading section="work">Projects</Heading>
        <Projects
          projects={projects}
          featuredSlug="retinal-haemorrhage-segmentation"
        />
      </Section>

      <Section id="skills">
        <Heading section="skills">Skills</Heading>
        <div className="mt-8 grid max-w-[52rem] gap-4 sm:gap-5">
          {skillGroups.map(({ title, skills }, index) => (
            <MotionEntrance
              key={title}
              entrance="lift"
              revealOnScroll
              delay={0.08 + index * 0.06}
            >
              <article className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-sm lg:grid-cols-[14rem_minmax(0,1fr)]">
                <h3 className="flex items-center gap-3 bg-navy px-5 py-4 text-xl leading-tight font-bold tracking-tight text-on-navy sm:px-6 lg:flex-col lg:items-start lg:justify-center lg:gap-4 lg:py-6 lg:text-2xl">
                  <span
                    aria-hidden="true"
                    className="h-0.5 w-6 shrink-0 rounded-full bg-accent"
                  />
                  {title}
                </h3>
                <ul className="mx-auto flex w-full max-w-[36rem] flex-wrap justify-center gap-2.5 p-4 [--skill-columns:2] sm:p-5 lg:p-6 sm:[--skill-columns:3] lg:[--skill-columns:4]">
                  {skills.map((skill) => {
                    const icon = skillIcons[skill];
                    return (
                      <li
                        key={skill}
                        className="flex min-h-25 w-[calc((100%+0.625rem)/var(--skill-columns)-0.625rem)] min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-line/60 bg-paper px-2 py-3 text-center text-sm leading-tight font-medium text-ink transition-colors hover:bg-accent-soft"
                      >
                        {icon && (
                          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#faf7f0] ring-1 ring-inset ring-[#e5ddce]">
                            <icon.Icon
                              aria-hidden="true"
                              color={icon.color}
                              className="size-8 sm:size-9"
                            />
                          </span>
                        )}
                        <span className="max-w-full text-balance">{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </MotionEntrance>
          ))}
        </div>
      </Section>

      <Timeline id="education" title="Education">
        {education.map((item, index) => (
          <TimelineEntry key={item.institution} featured={index === 0}>
            <article className="grid gap-1 rounded-2xl border border-line/75 bg-surface p-4 sm:p-5 lg:w-[85%]">
              <h3 className="text-lg leading-tight font-extrabold sm:text-xl">
                {item.institution}
              </h3>
              <TimelineMeta dates={item.years} location={item.location} />
              <p className="text-base font-semibold text-accent-text sm:text-lg">
                {item.subject}
              </p>
              <p className="text-sm font-bold text-accent-text">
                {item.result}
              </p>
            </article>
          </TimelineEntry>
        ))}
      </Timeline>

      <Contact />
    </main>
  );
}

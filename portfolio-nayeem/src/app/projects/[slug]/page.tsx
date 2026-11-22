import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

async function getProject(params: PageProps<"/projects/[slug]">["params"]) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return project;
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = await getProject(params);
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const project = await getProject(params);

  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-8">
      <Link
        href="/#work"
        className="inline-flex min-h-11 items-center font-semibold text-accent-text hover:underline"
      >
        Back to portfolio
      </Link>
      <article className="mt-6 rounded-[15px] bg-card p-5 shadow-[0_4px_8px_#0003] sm:p-8">
        <h1 className="text-3xl font-extrabold sm:text-5xl">{project.title}</h1>
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg bg-accent-soft px-3 py-1 text-sm text-accent-text"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Image
          {...project.image}
          alt={project.image.alt}
          sizes="(min-width: 896px) 768px, (min-width: 640px) calc(100vw - 128px), calc(100vw - 72px)"
          className="mt-6 h-auto max-h-[32rem] w-full rounded-lg bg-paper object-contain"
        />
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2 font-semibold text-on-accent hover:bg-accent-hover"
          >
            View on GitHub
          </a>
        </div>
      </article>
    </main>
  );
}

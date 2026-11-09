import Image from "next/image";
import { ProjectTabs } from "../components/ProjectTabs";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-20">
      <header className="border-t-4 border-accent pt-8 sm:pt-12">
        <p className="mb-4 text-xs font-bold tracking-[0.18em] text-accent uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Faisal Areefin
        </h1>
        <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">
          Software Engineer
        </p>
        <p className="mt-1 text-base font-medium text-muted sm:text-lg">
          Computer Science Graduate Student at Georgia Tech
        </p>
        <section aria-label="About Me" className="mt-6 grid gap-6 md:grid-cols-[1fr_minmax(0,22rem)] lg:grid-cols-[1fr_minmax(0,24rem)]">
          <div className="max-w-prose space-y-4 leading-relaxed text-muted">
            <p>
              I&apos;m a software engineer and master&apos;s student in Computer
              Science at Georgia Tech, with a background in full-stack development.
              I enjoy building applications that solve real-world problems, from
              productivity tools and social platforms to data-driven systems.
            </p>
            <p>
              I&apos;m always looking to learn new technologies, improve my skills,
              and turn ideas into working software.
            </p>
          </div>
          <figure>
            <Image
              src="/media/hackathon-team.webp"
              alt="Four teammates standing in front of the HackKnight 2026 banner"
              width={1000}
              height={654}
              unoptimized
              className="h-auto w-full max-w-sm rounded-xl border border-line"
            />
            <figcaption className="mt-2 text-sm text-muted">Our team at HackKnight 2026</figcaption>
          </figure>
        </section>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 py-2 font-semibold text-white hover:bg-accent-deep">
            View projects
          </a>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-lg border border-accent px-5 py-2 font-semibold text-accent hover:bg-tint">
            Contact
          </a>
        </div>
      </header>
      <section id="projects" className="mt-14 scroll-mt-8 sm:mt-20" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-center text-3xl font-bold tracking-tight">
          Selected Projects
        </h2>
        <ProjectTabs />
      </section>
      <section id="contact" className="mt-14 scroll-mt-8 rounded-2xl border border-line bg-tint p-6 sm:mt-20 sm:p-9" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-center text-3xl font-bold tracking-tight">
          Contact
        </h2>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
          <li>
            <a
              className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2 font-semibold text-white hover:bg-accent-deep"
              href="mailto:Faisal.Areefin97@qmail.cuny.edu"
            >
              Email me
            </a>
          </li>
          <li>
            <a
              className="inline-flex min-h-11 items-center rounded-lg px-2 py-2 font-semibold text-accent-deep underline underline-offset-4 hover:bg-white"
              href="https://www.linkedin.com/in/faisal-areefin/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="inline-flex min-h-11 items-center rounded-lg px-2 py-2 font-semibold text-accent-deep underline underline-offset-4 hover:bg-white"
              href="https://github.com/areefin1"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { projects } from "../data/projects";
import { ProjectDemo } from "./ProjectDemo";

const arrowClassName = "grid size-11 cursor-pointer place-items-center rounded-full bg-accent text-white shadow-md hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:size-13";

function stepProject(index: number, direction: -1 | 1) {
  return (index + direction + projects.length) % projects.length;
}

export function ProjectTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const { title, description, status, githubUrl, technologies, demo } = projects[activeIndex];

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowLeft":
        nextIndex = stepProject(index, -1);
        break;
      case "ArrowRight":
        nextIndex = stepProject(index, 1);
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = projects.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabs.current[nextIndex]?.focus();
  }

  return (
    <div className="mx-auto mt-5 max-w-[57rem]">
      <div role="tablist" aria-labelledby="projects-heading" className="mb-5 flex flex-wrap justify-center gap-2 sm:gap-3">
        {projects.map(({ title }, index) => (
          <button
            key={title}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`project-tab-${index}`}
            aria-controls="project-panel"
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className="min-h-11 cursor-pointer rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-accent shadow-sm hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent aria-selected:border-accent aria-selected:bg-accent aria-selected:text-white"
          >
            {title}
          </button>
        ))}
      </div>
      <section
        role="tabpanel"
        id="project-panel"
        aria-labelledby={`project-tab-${activeIndex}`}
        className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-6"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        {status && <p className="mt-2 inline-block rounded-full bg-tint px-3 py-1 text-xs font-semibold text-accent-deep">{status}</p>}
        <div className="-mx-2 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1 sm:mx-0 sm:gap-3">
          <button type="button" aria-label="Previous project" className={arrowClassName} onClick={() => setActiveIndex((index) => stepProject(index, -1))}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12H4m7-7-7 7 7 7" />
            </svg>
          </button>
          <ProjectDemo key={title} title={title} demo={demo} />
          <button type="button" aria-label="Next project" className={arrowClassName} onClick={() => setActiveIndex((index) => stepProject(index, 1))}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>
        <ul aria-label="Technologies" className="mt-4 mb-4 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li key={technology} className="rounded-md bg-tint px-2 py-1 text-xs font-semibold text-accent-deep">
              {technology}
            </li>
          ))}
        </ul>
        {githubUrl && (
          <a
            href={githubUrl}
            aria-label={`View on GitHub: ${title}`}
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-deep"
          >
            View on GitHub
          </a>
        )}
      </section>
    </div>
  );
}

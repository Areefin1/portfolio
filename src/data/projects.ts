export type Demo = { poster: string } & (
  | { kind: "youtube"; videoId: string }
  | { kind: "mp4"; src: string }
);

type Project = {
  title: string;
  demo: Demo;
  description: string;
  technologies: string[];
  githubUrl?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "ADHD Task Tracker",
    demo: { kind: "youtube", videoId: "5JIugRd-3uA", poster: "/media/adhd-task-tracker.webp" },
    technologies: ["React", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Areefin1/adhd-task-tracker",
    status: "In progress",
    description:
      "A full-stack app for managing tasks and tracking work sessions. I built the task management features and used PostgreSQL to save timer state, with sessions resetting automatically after extended breaks. Users can switch between active tasks and a Task History tab to review completed tasks, including the total time spent on each.",
  },
  {
    title: "Flop or Hit",
    demo: { kind: "mp4", src: "/media/flop-or-hit.mp4", poster: "/media/flop-or-hit.webp" },
    technologies: ["React", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/Areefin1/Flop-or-Hit/tree/develop",
    description:
      "A social app where users can create profiles, publish posts, comment, and react. I reduced the time it takes to fetch posts by 80% in a benchmark with 1,000 posts and 20,000 reactions by having PostgreSQL count reactions before sending the results to the app.",
  },
  {
    title: "HedgeLab",
    demo: { kind: "youtube", videoId: "XSGNo2lGXMk", poster: "/media/hedgelab.webp" },
    technologies: ["Python", "TimescaleDB", "AWS"],
    githubUrl: "https://github.com/Areefin1/restricted-book-hedger",
    description:
      "A hackathon project built by a four-person team. I helped move 3,912 historical financial records from CSV files to a PostgreSQL database hosted on AWS and updated the Python backend so the hedging simulations could read from that database.",
  },
];

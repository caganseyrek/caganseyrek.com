interface BlogPostProps {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  category: string[];
}

interface BlogPostsProps {
  year: number;
  posts: BlogPostProps[];
}

const blogPosts: BlogPostsProps[] = [
  {
    year: 2026,
    posts: [
      {
        id: "1",
        slug: "why-i-stopped-chasing-new-frameworks",
        title: "Why I Stopped Chasing New Frameworks",
        publishedAt: "2026-01-05T10:00:00Z",
        category: ["opinion", "career"],
      },
      {
        id: "2",
        slug: "building-a-static-site-generator-from-scratch",
        title: "Building a Static Site Generator from Scratch",
        publishedAt: "2026-01-12T14:30:00Z",
        category: ["typescript", "tooling"],
      },
      {
        id: "3",
        slug: "modular-monoliths-are-underrated",
        title: "Modular Monoliths Are Underrated",
        publishedAt: "2026-01-20T09:15:00Z",
        category: ["architecture", "backend"],
      },
    ],
  },
  {
    year: 2025,
    posts: [
      {
        id: "4",
        slug: "lessons-learned-from-rewriting-a-project",
        title: "Lessons Learned from Rewriting a Project",
        publishedAt: "2025-02-02T11:45:00Z",
        category: ["experience", "software-design"],
      },
      {
        id: "5",
        slug: "why-i-prefer-typescript-over-javascript",
        title: "Why I Prefer TypeScript Over JavaScript",
        publishedAt: "2025-02-10T16:00:00Z",
        category: ["typescript", "frontend"],
      },
      {
        id: "6",
        slug: "designing-apis-that-age-well",
        title: "Designing APIs That Age Well",
        publishedAt: "2025-02-18T08:40:00Z",
        category: ["api", "backend"],
      },
      {
        id: "7",
        slug: "authentication-is-harder-than-it-looks",
        title: "Authentication Is Harder Than It Looks",
        publishedAt: "2025-02-25T13:20:00Z",
        category: ["security", "backend"],
      },
      {
        id: "8",
        slug: "stop-overengineering-your-side-projects",
        title: "Stop Overengineering Your Side Projects",
        publishedAt: "2025-03-03T10:10:00Z",
        category: ["opinion", "productivity"],
      },
      {
        id: "9",
        slug: "how-i-structure-backend-projects",
        title: "How I Structure Backend Projects",
        publishedAt: "2025-03-11T15:00:00Z",
        category: ["architecture", "backend"],
      },
      {
        id: "10",
        slug: "writing-less-code-on-purpose",
        title: "Writing Less Code on Purpose",
        publishedAt: "2025-03-18T09:50:00Z",
        category: ["clean-code", "philosophy"],
      },
      {
        id: "11",
        slug: "from-idea-to-shippable-project",
        title: "From Idea to Shippable Project",
        publishedAt: "2025-03-26T12:00:00Z",
        category: ["process", "product"],
      },
      {
        id: "12",
        slug: "why-i-avoid-heavy-frontend-frameworks",
        title: "Why I Avoid Heavy Frontend Frameworks",
        publishedAt: "2025-04-02T14:10:00Z",
        category: ["frontend", "opinion"],
      },
      {
        id: "13",
        slug: "mistakes-i-made-building-my-first-api",
        title: "Mistakes I Made Building My First API",
        publishedAt: "2025-04-10T10:30:00Z",
        category: ["api", "lessons-learned"],
      },
      {
        id: "14",
        slug: "tools-dont-make-you-a-better-developer",
        title: "Tools Don’t Make You a Better Developer",
        publishedAt: "2025-04-18T17:00:00Z",
        category: ["career", "opinion"],
      },
      {
        id: "15",
        slug: "documenting-code-for-humans",
        title: "Documenting Code for Humans",
        publishedAt: "2025-04-25T09:00:00Z",
        category: ["documentation", "best-practices"],
      },
    ],
  },
];

export { blogPosts };

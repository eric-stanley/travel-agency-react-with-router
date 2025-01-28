import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { Link } from "react-router";

const data = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    description:
      "Discover the essential tools and frameworks needed for modern web development. Learn about the latest technologies, best practices, and workflow optimization techniques for building robust web applications.",
    date: "March 15, 2024",
    category: "Web Development",
    link: "#",
  },
  {
    id: 2,
    title: "Understanding Frontend Design Principles",
    description:
      "Explore fundamental principles of frontend design and development. Learn about responsive layouts, user interface patterns, accessibility standards, and how to create engaging user experiences.",
    date: "March 12, 2024",
    category: "Frontend",
    link: "#",
  },
  {
    id: 3,
    title: "Backend Development Fundamentals Guide",
    description:
      "Master the core concepts of backend development including database design, API architecture, and server management. Learn how to build secure, efficient, and scalable backend systems.",
    date: "March 8, 2024",
    category: "Backend",
    link: "#",
  },
  {
    id: 4,
    title: "Advanced JavaScript Programming Concepts",
    description:
      "Deep dive into advanced JavaScript concepts including async programming, design patterns, and modern ES6+ features. Learn how to write clean, maintainable, and efficient JavaScript code.",
    date: "March 5, 2024",
    category: "Frontend",
    link: "#",
  },
];

const Blog19 = () => {
  return (
    <section className="py-16 px-[1.5rem] lg:px-[5rem]">
      <div className="container">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-1">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Related articles
          </h1>
          <Link to="/blog">
            <Button
              variant="outline"
              className="md:h-10 md:px-4 md:py-2"
              size="sm"
            >
              See all articles
            </Button>
          </Link>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pb-4 pt-2">
              <h2 className="mb-1 font-medium">
                How to build a successful brand and business online in 2024
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://shadcnblocks.com/images/block/avatar-4.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  10 Min Read
                </Badge>
              </div>
            </div>
          </a>
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pb-4 pt-2">
              <h2 className="mb-1 font-medium">
                The difference between UI and UX and how to design for both
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://shadcnblocks.com/images/block/avatar-1.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">Jane Doe</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  14 Min Read
                </Badge>
              </div>
            </div>
          </a>
          <a className="rounded-xl border" href="#">
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-3 pb-4 pt-2">
              <h2 className="mb-1 font-medium">
                Optimizing your website for SEO and getting more traffic
              </h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Separator className="my-5" />
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://shadcnblocks.com/images/block/avatar-3.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <span className="text-sm font-medium">Jane Smith</span>
                </div>
                <Badge variant="secondary" className="h-fit">
                  9 Min Read
                </Badge>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog19;

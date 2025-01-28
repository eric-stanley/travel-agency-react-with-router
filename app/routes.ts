import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("destination1", "routes/destinations/destination001.tsx"),
  route("destination2", "routes/destinations/destination002.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("post1", "routes/posts/post001.tsx"),
  route("blog", "routes/blog.tsx"),
] satisfies RouteConfig;

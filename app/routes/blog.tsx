import Layout from "~/components/Layout";
import type { Route } from "./+types/home";
import Blog11 from "~/blocks/blog/Blog11";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Destination002() {
  return (
    <Layout>
      <Blog11 />
    </Layout>
  );
}

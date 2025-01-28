import Layout from "~/components/Layout";
import type { Route } from "./+types/home";
import About1 from "~/blocks/about/About1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Destination002() {
  return (
    <Layout>
      <About1 />
    </Layout>
  );
}

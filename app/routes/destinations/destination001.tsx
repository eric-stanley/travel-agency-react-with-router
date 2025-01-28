import Layout from "~/components/Layout";
import type { Route } from "../+types/home";
import Content1 from "~/blocks/content/Content1";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Destination001() {
  return (
    <Layout>
      <Content1 />
    </Layout>
  );
}

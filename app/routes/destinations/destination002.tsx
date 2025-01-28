import Layout from "~/components/Layout";
import type { Route } from "../+types/home";
import Content2 from "~/blocks/content/Content2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Destination002() {
  return (
    <Layout>
      <Content2 />
    </Layout>
  );
}

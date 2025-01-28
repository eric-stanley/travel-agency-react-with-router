import Layout from "~/components/Layout";
import type { Route } from "./+types/home";
import Contact2 from "~/blocks/contact/Contact2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Destination002() {
  return (
    <Layout>
      <Contact2 />
    </Layout>
  );
}

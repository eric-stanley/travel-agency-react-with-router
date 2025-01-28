import Layout from "~/components/Layout";
import type { Route } from "../+types/home";
import Post15 from "~/blocks/post/Post15";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Destination002() {
  return (
    <Layout>
      <Post15 />
    </Layout>
  );
}

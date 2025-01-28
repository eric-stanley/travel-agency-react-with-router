import type { Route } from "./+types/home";
import Hero034 from "~/blocks/hero/Hero034";
import Gallery4 from "~/blocks/gallery/Gallery4";
import Team3 from "~/blocks/team/Team3";
import Layout from "~/components/Layout";
import Testimonial6 from "~/blocks/testimonial/Testimonial6";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Hero034 />
      <Gallery4 />
      <Team3 />
      <Testimonial6 />
    </Layout>
  );
}

import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";

import { Fragment } from "react";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React applications and sites a breeze and ships with build-in SSR.",
    date: "2023-01-24",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs2",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React applications and sites a breeze and ships with build-in SSR.",
    date: "2023-01-24",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs3",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React applications and sites a breeze and ships with build-in SSR.",
    date: "2023-01-24",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs4",
    excerpt:
      "NextJs is a React framework for production - it makes building fullstack React applications and sites a breeze and ships with build-in SSR.",
    date: "2023-01-24",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/utils/posts-util";
import Head from "next/head";
import { Fragment } from "react";
import { DUMMY_POSTS } from "..";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;

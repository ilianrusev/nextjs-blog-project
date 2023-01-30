import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/utils/posts-util";
import { DUMMY_POSTS } from "..";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
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

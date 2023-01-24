import AllPosts from "@/components/posts/AllPosts";
import { DUMMY_POSTS } from "..";

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;

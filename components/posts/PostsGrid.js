import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;

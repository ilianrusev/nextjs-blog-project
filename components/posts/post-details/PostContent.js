import ReactMarkdown from "react-markdown";
import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";

function PostContent(props) {
  console.log(props);
  const { post } = props;
  const imagePath = `/images/${post.image} `;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

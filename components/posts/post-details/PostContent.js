import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/${post.image} `;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

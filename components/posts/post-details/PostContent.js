import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  slug: "getting-started-with-nextjs",
  excerpt:
    "NextJs is a React framework for production - it makes building fullstack React applications and sites a breeze and ships with build-in SSR.",
  date: "2023-01-24",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/${DUMMY_POST.image} `;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;

import Image from "next/image";
import Link from "next/link";

import styles from "./PostsItem.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/iamges/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;

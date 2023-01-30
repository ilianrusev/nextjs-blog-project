import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <section className={styles.contact}>
      <h1>How can I help you</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Your Message</label>
            <textarea rows={"5"} id="email"></textarea>
          </div>
          <div className={styles.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;

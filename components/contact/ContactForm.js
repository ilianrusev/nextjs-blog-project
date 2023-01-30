import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    //optional add client side validation

    fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={styles.contact} onSubmit={sendMessageHandler}>
      <h1>How can I help you</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Your Message</label>
            <textarea
              rows={"5"}
              id="email"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
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

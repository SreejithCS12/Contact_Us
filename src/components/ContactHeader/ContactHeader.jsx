import React from "react";
import styles from "./ContactHeader.module.css";
function contactHeader() {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut praesentium
        debitis laudantium ipsam accusamus est nulla iusto tenetur quo pariatur,
        aspernatur tempora quas suscipit error sed quidem veniam? Enim,
        quisquam!
      </p>
    </div>
  );
}

export default contactHeader;

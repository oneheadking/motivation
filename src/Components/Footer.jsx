import React from "react";

function Footer() {
  const currYear = new Date().getFullYear;
  console.log(currYear);

  return <footer>Copyright reserved by Martin 2020</footer>;
}

export default Footer;

import Link from "next/link";

import classes from "./index.module.css";

const Nav = () => {
  return (
    <nav className={classes["app-nav"]}>
      <h1 className={classes.logo}>NextJS thing</h1>
      <ul className={classes["nav-links"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

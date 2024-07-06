import { ReactNode } from "react";
import PropTypes from "prop-types";
import styles from "@/styles/Banner.module.css";

type Props = {
  children: ReactNode;
  cssClass?: string;
};

const Banner = ({ children, cssClass }: Props) => (
  <div
    className={`${styles.container} ${cssClass ? cssClass : ""}`}
    data-test-id="banner"
  >
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  cssClass: PropTypes.string,
};

export default Banner;

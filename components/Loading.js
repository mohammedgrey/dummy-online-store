//Components
import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import layoutStyles from "../styles/Layout.module.scss";
import animationStyles from "../styles/Animator.module.scss";

export default function Loading() {
  return (
    <div className={layoutStyles.center}>
      <FontAwesomeIcon className={animationStyles.loadingAnimation} icon={faSpinner} />
    </div>
  );
}

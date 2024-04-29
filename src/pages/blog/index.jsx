import React from "react";
import "./style.css";
import IframeResizer from "iframe-resizer-react";

const Blog = () => {
  return (
    <div>
      <IframeResizer
        log
        inPageLinks
        scrolling="no"
        checkOrigin="false"
        heightCalculationMethod="bodyOffset"
        src="https://jntbexim.com/blog"
        className="page-padding"
        width="100%"
      ></IframeResizer>
    </div>
  );
};

export default Blog;

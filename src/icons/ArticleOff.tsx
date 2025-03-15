import * as React from "react";
import type { SVGProps } from "react";
const SvgArticleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#article-off_svg__a)"
    >
      <path d="M8 4h11a2 2 0 0 1 2 2v11m-1.172 2.821c-.26.118-.542.18-.828.179H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.156-1.814M7 8h1m4 0h5M7 12h5m4 0h1M7 16h9M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="article-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArticleOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBubbleText = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bubble-text_svg__a)"
    >
      <path d="M7 10h10M9 14h5M12.398 3a5.34 5.34 0 0 1 4.906 3.239 5.333 5.333 0 1 1-1.195 10.6 4.26 4.26 0 0 1-5.28 1.863L7 21v-3.134a2.67 2.67 0 0 1-1.796-3.773A4.8 4.8 0 0 1 8.111 5.16 5.33 5.33 0 0 1 12.398 3" />
    </g>
    <defs>
      <clipPath id="bubble-text_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBubbleText;

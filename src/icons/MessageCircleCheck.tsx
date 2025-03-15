import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-check_svg__a)"
    >
      <path d="M11.042 19.935a9.8 9.8 0 0 1-3.342-.933l-4.7 1 1.3-3.9C1.976 12.665 2.874 8.23 6.4 5.728c3.526-2.501 8.59-2.296 11.845.48 2.127 1.814 3.052 4.36 2.694 6.808M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="message-circle-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCircleCheck;

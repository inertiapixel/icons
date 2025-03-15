import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-x_svg__a)"
    >
      <path d="M13.593 19.857a9.96 9.96 0 0 1-5.893-.855l-4.7 1 1.3-3.9C1.976 12.665 2.874 8.23 6.4 5.728c3.526-2.501 8.59-2.296 11.845.48 2.128 1.816 3.053 4.363 2.693 6.813M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="message-circle-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCircleX;

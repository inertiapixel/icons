import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-check_svg__a)"
    >
      <path d="m19.501 12.572-3 2.928m-5.5 3.5a8812 8812 0 0 0-6.5-6.428 5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="heart-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartCheck;

import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBarToUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-bar-to-up_svg__a)"
    >
      <path d="M12 10v10M12 10l4 4M12 10l-4 4M4 4h16" />
    </g>
    <defs>
      <clipPath id="arrow-bar-to-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBarToUp;

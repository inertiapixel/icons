import * as React from "react";
import type { SVGProps } from "react";
const SvgTorii = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#torii_svg__a)"
    >
      <path d="M4 4q8 2 16 0M4 8h16M12 5v3M18 4.5V20M6 4.5V20" />
    </g>
    <defs>
      <clipPath id="torii_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTorii;

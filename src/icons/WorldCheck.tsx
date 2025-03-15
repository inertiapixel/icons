import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldCheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-check_svg__a)"
    >
      <path d="M20.945 12.99a9 9 0 1 0-9.46 7.995M3.602 9h16.8M3.602 15h13.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.311 12.001M15 19l2 2 4-4" />
    </g>
    <defs>
      <clipPath id="world-check_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldCheck;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCards1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cards-1_svg__a)"
    >
      <path d="m3.605 7.198 7.138-3.109a.96.96 0 0 1 1.27.527l4.924 11.902a1 1 0 0 1-.514 1.304l-7.137 3.11a.96.96 0 0 1-1.27-.528L3.09 8.501a1 1 0 0 1 .514-1.303M15 4h1a1 1 0 0 1 1 1v3.5M20 6q.396.168.768.315a1 1 0 0 1 .53 1.311L19 13" />
    </g>
    <defs>
      <clipPath id="cards-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCards1;

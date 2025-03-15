import * as React from "react";
import type { SVGProps } from "react";
const SvgWashGentle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wash-gentle_svg__a)"
    >
      <path d="M3.484 5.965q.252.031.514.035c.79.01 1.54-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.54.18 2 .5.461.322 1.21.51 2 .5.79.01 1.54-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.54.18 2 .5.461.322 1.21.51 2 .5.17 0 .34-.014.503-.034" />
      <path d="m3 3 1.721 10.329A2 2 0 0 0 6.694 15h10.612a2 2 0 0 0 1.973-1.671L21 3M5 18h14M5 21h14" />
    </g>
    <defs>
      <clipPath id="wash-gentle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWashGentle;

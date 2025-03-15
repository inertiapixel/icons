import * as React from "react";
import type { SVGProps } from "react";
const SvgWashEco = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wash-eco_svg__a)"
    >
      <path d="m3 6 1.721 10.329A2 2 0 0 0 6.694 18H12m8.162-6.972L21 6" />
      <path d="M3.484 8.965q.252.031.514.035c.79.01 1.54-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.54.18 2 .5.461.322 1.21.51 2 .5.79.01 1.54-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.54.18 2 .5.461.322 1.21.51 2 .5q.257-.002.503-.034M16 22s0-2 3-4" />
      <path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3" />
    </g>
    <defs>
      <clipPath id="wash-eco_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWashEco;

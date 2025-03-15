import * as React from "react";
import type { SVGProps } from "react";
const SvgShirtOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shirt-off_svg__a)"
    >
      <path d="M8.243 4.252 9 4c0 .43.09.837.252 1.206m1.395 1.472A3 3 0 0 0 15 4l6 2v5h-3v3m0 4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l2.26-.753M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="shirt-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShirtOff;

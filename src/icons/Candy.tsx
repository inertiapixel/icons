import * as React from "react";
import type { SVGProps } from "react";
const SvgCandy = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#candy_svg__a)"
    >
      <path d="m7.05 11.293 4.243-4.243a2 2 0 0 1 2.828 0l2.83 2.83a2 2 0 0 1 0 2.828l-4.244 4.243a2 2 0 0 1-2.828 0l-2.829-2.83a2 2 0 0 1 0-2.829zM16.242 9.171l3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.666a1.5 1.5 0 0 0-2.44.47L14.121 7.05" />
      <path d="M9.171 16.242 8.4 19.328a1.5 1.5 0 0 1-2.516.697L3.666 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248" />
    </g>
    <defs>
      <clipPath id="candy_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCandy;

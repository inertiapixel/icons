import * as React from "react";
import type { SVGProps } from "react";
const SvgCandyOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#candy-off_svg__a)"
    >
      <path d="m11.175 7.17.118-.12a2 2 0 0 1 2.829 0l2.829 2.83a2 2 0 0 1 0 2.828l-.125.124m-2 2-2.123 2.123a2 2 0 0 1-2.827 0l-2.83-2.83a2 2 0 0 1 0-2.829L9.16 9.184" />
      <path d="m16.242 9.171 3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.666a1.5 1.5 0 0 0-2.44.47L14.121 7.05M9.171 16.242 8.4 19.328a1.5 1.5 0 0 1-2.516.697L3.666 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="candy-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCandyOff;

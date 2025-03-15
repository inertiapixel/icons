import * as React from "react";
import type { SVGProps } from "react";
const SvgHearts = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hearts_svg__a)"
    >
      <path d="m14.018 18-2.017 2-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 0 1 8.153 5.784" />
      <path d="m15.992 20 4.197-4.223a2.81 2.81 0 0 0 0-3.948 2.747 2.747 0 0 0-3.91-.007l-.28.282-.28-.283a2.747 2.747 0 0 0-3.91-.007 2.81 2.81 0 0 0-.006 3.948L15.985 20z" />
    </g>
    <defs>
      <clipPath id="hearts_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHearts;

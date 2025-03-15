import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandUpwork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-upwork_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7v5a3 3 0 0 0 6 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 1 0 0-7c-2.027 0-3.137 1-3.5 3-.242 1.33-.908 4-2 8"
      />
    </g>
    <defs>
      <clipPath id="brand-upwork_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandUpwork;

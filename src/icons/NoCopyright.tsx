import * as React from "react";
import type { SVGProps } from "react";
const SvgNoCopyright = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#no-copyright_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M14.001 9.75a3.016 3.016 0 0 0-4.163.174 2.993 2.993 0 0 0 0 4.154 3.016 3.016 0 0 0 4.163.173M6 6l1.5 1.5M16.5 16.5 18 18" />
    </g>
    <defs>
      <clipPath id="no-copyright_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNoCopyright;

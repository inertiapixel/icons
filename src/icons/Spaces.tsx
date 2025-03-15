import * as React from "react";
import type { SVGProps } from "react";
const SvgSpaces = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#spaces_svg__a)"
    >
      <path d="M6.045 9.777a6 6 0 1 0 5.95.023" />
      <path d="M11.999 20.195a6 6 0 1 0-2.948-5.97" />
      <path d="M17.95 9.783q.05-.386.05-.785a6 6 0 1 0-3.056 5.23" />
    </g>
    <defs>
      <clipPath id="spaces_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpaces;

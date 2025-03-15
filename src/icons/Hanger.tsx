import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hanger_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 6a2 2 0 1 0-4 0c0 1.667.67 3 2 4h-.008m0 0 7.971 4.428a2 2 0 0 1 1.03 1.749V17a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.028-1.749z"
      />
    </g>
    <defs>
      <clipPath id="hanger_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHanger;

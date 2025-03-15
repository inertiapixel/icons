import * as React from "react";
import type { SVGProps } from "react";
const SvgContainerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#container-off_svg__a)"
    >
      <path d="M20 4v.01M20 20v.01M20 16v.01M20 12v.01M20 8v.01M8.297 4.289A1 1 0 0 1 9 4h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8M4 4v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="container-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContainerOff;

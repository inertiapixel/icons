import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowserOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#browser-off_svg__a)"
    >
      <path d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702A1 1 0 0 1 19 20H5a1 1 0 0 1-1-1V5c0-.276.112-.526.293-.707M4 8h4m4 0h8M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="browser-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrowserOff;

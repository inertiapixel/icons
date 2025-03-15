import * as React from "react";
import type { SVGProps } from "react";
const SvgFileBroken = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-broken_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 7V5a2 2 0 0 1 2-2h7l5 5v2M19 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2M5 16h.01M5 13h.01M5 10h.01M19 13h.01M19 16h.01" />
    </g>
    <defs>
      <clipPath id="file-broken_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileBroken;

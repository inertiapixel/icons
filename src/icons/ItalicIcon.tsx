import * as React from "react";
import type { SVGProps } from "react";
const SvgItalicIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#italic-icon_svg__a)"
    >
      <path d="M11 5h6M7 19h6M14 5l-4 14" />
    </g>
    <defs>
      <clipPath id="italic-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgItalicIcon;

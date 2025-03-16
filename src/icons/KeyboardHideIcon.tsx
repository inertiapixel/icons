import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboardHideIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#keyboard-hide-icon_svg__a)"
    >
      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM6 7v.01M10 7v.01M14 7v.01M18 7v.01M6 11v.01M18 11v.01M10 11h4M10 21l2-2 2 2" />
    </g>
    <defs>
      <clipPath id="keyboard-hide-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKeyboardHideIcon;

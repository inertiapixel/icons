import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboardOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#keyboard-off-icon_svg__a)"
    >
      <path d="M18 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554-.226 1.056-.59 1.418M6 10v.01M10 10v.01M14 10v.01M18 10v.01M6 14v.01M18 14v.01M10 14h4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="keyboard-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKeyboardOffIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgNfc = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#nfc_svg__a)"
    >
      <path d="M11 20a3 3 0 0 1-3-3V6l5 5" />
      <path d="M13 4a3 3 0 0 1 3 3v11l-5-5" />
      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
    </g>
    <defs>
      <clipPath id="nfc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNfc;

import * as React from "react";
import type { SVGProps } from "react";
const SvgMailExclamation = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mail-exclamation_svg__a)"
    >
      <path d="M15 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
      <path d="m3 7 9 6 9-6M19 16v3M19 22v.01" />
    </g>
    <defs>
      <clipPath id="mail-exclamation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailExclamation;

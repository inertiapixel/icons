import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterSpacingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-spacing-icon_svg__a)"
    >
      <path d="M5 12V6.5a2.5 2.5 0 1 1 5 0V12m0-4H5M13 4l3 8 3-8M5 18h14M17 20l2-2-2-2M7 16l-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="letter-spacing-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterSpacingIcon;

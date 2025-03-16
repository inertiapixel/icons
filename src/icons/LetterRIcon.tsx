import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterRIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-r-icon_svg__a)"
    >
      <path d="M7 20V4h5.5a4.5 4.5 0 1 1 0 9H7M12 13l5 7" />
    </g>
    <defs>
      <clipPath id="letter-r-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterRIcon;

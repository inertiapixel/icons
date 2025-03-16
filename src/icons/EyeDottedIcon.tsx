import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeDottedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-dotted-icon_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M21 12h.01M3 12h.01M5 15h.01M5 9h.01M19 15h.01M12 18h.01M12 6h.01M8 17h.01M8 7h.01M16 17h.01M16 7h.01M19 9h.01" />
    </g>
    <defs>
      <clipPath id="eye-dotted-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeDottedIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderRadiusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#border-radius-icon_svg__a)"
    >
      <path d="M4 12V8a4 4 0 0 1 4-4h4M16 4v.01M20 4v.01M20 8v.01M20 12v.01M4 16v.01M20 16v.01M4 20v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
    </g>
    <defs>
      <clipPath id="border-radius-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBorderRadiusIcon;

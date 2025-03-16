import * as React from "react";
import type { SVGProps } from "react";
const SvgLineDottedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#line-dotted-icon_svg__a)"
    >
      <path d="M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01" />
    </g>
    <defs>
      <clipPath id="line-dotted-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLineDottedIcon;

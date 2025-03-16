import * as React from "react";
import type { SVGProps } from "react";
const SvgAxisYIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#axis-y-icon_svg__a)"
    >
      <path d="M10.998 20h-.01M14.998 20h-.01M18.998 20h-.01M4 7l3-3 3 3M7 20V4" />
    </g>
    <defs>
      <clipPath id="axis-y-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAxisYIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLoaderQuarterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#loader-quarter-icon_svg__a)"
    >
      <path d="M12 6V3M6 12H3M7.752 7.752l-2.15-2.15" />
    </g>
    <defs>
      <clipPath id="loader-quarter-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoaderQuarterIcon;

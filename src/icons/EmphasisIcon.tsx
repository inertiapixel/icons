import * as React from "react";
import type { SVGProps } from "react";
const SvgEmphasisIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#emphasis-icon_svg__a)"
    >
      <path d="M16 5H8v10h8m-1-5H8M6 20v.01M10 20v.01M14 20v.01M18 20v.01" />
    </g>
    <defs>
      <clipPath id="emphasis-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEmphasisIcon;

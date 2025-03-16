import * as React from "react";
import type { SVGProps } from "react";
const SvgBracesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#braces-icon_svg__a)"
    >
      <path d="M7 4a2 2 0 0 0-2 2v3c0 .796-.21 1.559-.586 2.121C4.04 11.684 3.53 12 3 12c.53 0 1.04.316 1.414.879C4.79 13.44 5 14.204 5 15v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3c0 .796.21 1.559.586 2.121.375.563.884.879 1.414.879-.53 0-1.04.316-1.414.879C19.21 13.44 19 14.204 19 15v3a2 2 0 0 1-2 2" />
    </g>
    <defs>
      <clipPath id="braces-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBracesIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgView360Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#view-360-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M8 12c0 2.387.421 4.676 1.172 6.364S10.939 21 12 21s2.078-.948 2.828-2.636S16 14.387 16 12s-.421-4.676-1.172-6.364S13.061 3 12 3s-2.078.948-2.828 2.636S8 9.613 8 12" />
      <path d="M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4-4.03-4-9-4-9 1.79-9 4" />
    </g>
    <defs>
      <clipPath id="view-360-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgView360Icon;

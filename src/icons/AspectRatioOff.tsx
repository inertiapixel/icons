import * as React from "react";
import type { SVGProps } from "react";
const SvgAspectRatioOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#aspect-ratio-off_svg__a)"
    >
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="M7 12V9h2M17 12v1m-2 2h-1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="aspect-ratio-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAspectRatioOff;

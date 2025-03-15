import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandShazam = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-shazam_svg__a)"
    >
      <path d="m10 12 2-2a2.827 2.827 0 0 1 4.613 3.083c-.142.343-.35.655-.613.918l-3 3" />
      <path d="m14 12-2 2a2.827 2.827 0 1 1-4-4l3-3" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="brand-shazam_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandShazam;

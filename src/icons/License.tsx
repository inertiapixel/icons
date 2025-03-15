import * as React from "react";
import type { SVGProps } from "react";
const SvgLicense = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#license_svg__a)"
    >
      <path d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 2 2m0 0a2 2 0 0 0 2-2V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-3 3v11M9 7h4M9 11h4" />
    </g>
    <defs>
      <clipPath id="license_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLicense;

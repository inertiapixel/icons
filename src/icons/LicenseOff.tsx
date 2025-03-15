import * as React from "react";
import type { SVGProps } from "react";
const SvgLicenseOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#license-off_svg__a)"
    >
      <path d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 2 2m0 0a2 2 0 0 0 2-2v-2m0-4V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-.864.126M5.122 5.151A3 3 0 0 0 5 6v11M11 7h2M9 11h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="license-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLicenseOff;

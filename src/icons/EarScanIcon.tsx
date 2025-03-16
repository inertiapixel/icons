import * as React from "react";
import type { SVGProps } from "react";
const SvgEarScanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ear-scan-icon_svg__a)"
    >
      <path d="M15 15.002a2 2 0 0 1-2 2c-.732 0-1.555-.247-1.72-.98-.634-2.8-3.17-2.628-3.28-5.02v-.5a3.5 3.5 0 0 1 6.671-1.483M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2M13 12v.01" />
    </g>
    <defs>
      <clipPath id="ear-scan-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEarScanIcon;

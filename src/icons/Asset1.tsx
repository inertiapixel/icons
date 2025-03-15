import * as React from "react";
import type { SVGProps } from "react";
const SvgAsset1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#asset-1_svg__a)"
    >
      <path d="M3 15a6 6 0 1 0 12 0 6 6 0 0 0-12 0" />
      <path d="M7 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M14.219 17.975 20.838 5.8M6.078 9.756l12.217-6.631" />
      <path d="M7 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="asset-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAsset1;

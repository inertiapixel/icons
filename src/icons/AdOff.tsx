import * as React from "react";
import type { SVGProps } from "react";
const SvgAdOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ad-off_svg__a)"
    >
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="M7 15v-4a2 2 0 0 1 2-2m2 2v4M7 13h4M17 9v4M16.113 12.133c.33.149.595.412.747.74M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ad-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdOff;

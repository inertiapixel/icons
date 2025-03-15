import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgeAdOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#badge-ad-off_svg__a)"
    >
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="M14 14v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1M7 15v-4.5a1.5 1.5 0 0 1 2.077-1.385m.788.762c.087.19.135.4.135.623V15M7 13h3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="badge-ad-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeAdOff;

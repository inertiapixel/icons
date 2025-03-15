import * as React from "react";
import type { SVGProps } from "react";
const SvgHours24 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hours-24_svg__a)"
    >
      <path d="M4 13c.325 2.532 1.881 4.781 4 6M20 11A8.1 8.1 0 0 0 4.5 9" />
      <path d="M4 5v4h4M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2M18 15v2a1 1 0 0 0 1 1h1M21 15v6" />
    </g>
    <defs>
      <clipPath id="hours-24_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHours24;

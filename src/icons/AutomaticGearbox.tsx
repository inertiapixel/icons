import * as React from "react";
import type { SVGProps } from "react";
const SvgAutomaticGearbox = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#automatic-gearbox_svg__a)"
    >
      <path d="M17 17v4h1a2 2 0 0 0 0-4zM17 11h1.5a1.5 1.5 0 1 0 0-3H17v5M3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3M9 11h4" />
    </g>
    <defs>
      <clipPath id="automatic-gearbox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAutomaticGearbox;

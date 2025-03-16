import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSteamIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-steam-icon_svg__a)"
    >
      <path d="M16.5 5a4.5 4.5 0 1 1-.653 8.953L11.5 16.962V17a3 3 0 0 1-2.824 3H8.5a3 3 0 0 1-2.94-2.402L3 16.5V13l3.51 1.755a2.99 2.99 0 0 1 2.834-.635l2.727-3.818A4.502 4.502 0 0 1 16.5 5" />
      <path fill="currentColor" d="M16.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </g>
    <defs>
      <clipPath id="brand-steam-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSteamIcon;

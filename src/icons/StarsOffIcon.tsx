import * as React from "react";
import type { SVGProps } from "react";
const SvgStarsOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stars-off-icon_svg__a)"
    >
      <path d="m17.371 13.372.076-.155a.391.391 0 0 1 .702 0l.907 1.832m.367.39q.747.107 2.24.323a.389.389 0 0 1 .217.665q-.489.474-.732.713m-.61 3.404a.39.39 0 0 1-.568.412l-2.172-1.139-2.172 1.139a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.708a.39.39 0 0 1 .217-.665l1.601-.232M6.2 19.818 4.03 20.955a.392.392 0 0 1-.568-.41l.415-2.41-1.757-1.708a.39.39 0 0 1 .217-.665l2.428-.351 1.086-2.193a.391.391 0 0 1 .702 0l1.086 2.193 2.428.351a.389.389 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.412zM9.558 5.556l1-.146 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665L14.32 8.134l.414 2.41a.4.4 0 0 1-.014.188m-4.153-.166-.744.39a.392.392 0 0 1-.568-.41l.188-1.094M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="stars-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStarsOffIcon;

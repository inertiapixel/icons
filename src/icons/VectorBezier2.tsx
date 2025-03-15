import * as React from "react";
import type { SVGProps } from "react";
const SvgVectorBezier2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#vector-bezier-2_svg__a)"
    >
      <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM7 5h7M10 19h7M8 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M7 5.5c.657 0 1.307.168 1.913.495a5.1 5.1 0 0 1 1.623 1.409c.464.603.832 1.32 1.083 2.109.252.788.381 1.633.381 2.487 0 1.724.527 3.377 1.464 4.596.938 1.22 2.21 1.904 3.536 1.904" />
    </g>
    <defs>
      <clipPath id="vector-bezier-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVectorBezier2;

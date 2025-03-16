import * as React from "react";
import type { SVGProps } from "react";
const SvgSofaOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sofa-off-icon_svg__a)"
    >
      <path d="M18 14v-1a2 2 0 0 1 4 0v5m-3 1H3a1 1 0 0 1-1-1v-5a2 2 0 0 1 4 0v1h8" />
      <path d="M4 11V8c0-1.082.573-2.03 1.432-2.558M9 5h8a3 3 0 0 1 3 3v3M12 5v3m0 4v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="sofa-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSofaOffIcon;

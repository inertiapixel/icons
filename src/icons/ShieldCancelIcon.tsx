import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCancelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-cancel-icon_svg__a)"
    >
      <path d="M12.276 20.925q-.138.039-.277.075a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3c.596 2.028.646 4.178.145 6.232M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 21l4-4" />
    </g>
    <defs>
      <clipPath id="shield-cancel-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldCancelIcon;

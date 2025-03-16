import * as React from "react";
import type { SVGProps } from "react";
const SvgAdjustmentsPinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#adjustments-pin-icon_svg__a)"
    >
      <path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 4v4M6 12v8M13.07 14.31A1.999 1.999 0 1 0 11.997 18M12 4v10M12 18v2M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 4v1M18 9v2.5M21.121 20.122a3 3 0 1 0-4.242 0Q17.506 20.75 19 22q1.577-1.334 2.121-1.88M19 18v.01" />
    </g>
    <defs>
      <clipPath id="adjustments-pin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdjustmentsPinIcon;

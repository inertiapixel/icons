import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeTableIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-table-icon_svg__a)"
    >
      <path d="M8 18h-.012M12 18h-.012M16 18h-.012M4 3h16M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3M14 7h-4M9 15h1M14 15h1M12 11V7" />
    </g>
    <defs>
      <clipPath id="eye-table-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeTableIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cash-off-icon_svg__a)"
    >
      <path d="M13 9h6a2 2 0 0 1 2 2v6m-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2" />
      <path d="M12.584 12.59a2 2 0 0 0 2.83 2.826M17 9V7a2 2 0 0 0-2-2H9M5 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cash-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCashOffIcon;

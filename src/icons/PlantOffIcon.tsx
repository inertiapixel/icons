import * as React from "react";
import type { SVGProps } from "react";
const SvgPlantOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plant-off-icon_svg__a)"
    >
      <path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h8M11.9 7.908a6 6 0 0 0-4.79-4.806M3 3v2a6 6 0 0 0 6 6h2M12.531 8.528A6 6 0 0 1 18.001 5h3v1a6 6 0 0 1-5.038 5.923M12 15v-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="plant-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlantOffIcon;

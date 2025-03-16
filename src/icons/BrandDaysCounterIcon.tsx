import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDaysCounterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-days-counter-icon_svg__a)"
    >
      <path d="M20.78 10.008A9 9 0 1 0 10.01 20.78M13 21h8v-7" />
      <path d="M12 8v4l3 3" />
    </g>
    <defs>
      <clipPath id="brand-days-counter-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDaysCounterIcon;

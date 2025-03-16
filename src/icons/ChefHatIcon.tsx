import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHatIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chef-hat-icon_svg__a)"
    >
      <path d="M12.002 3c1.917 0 3.52 1.35 3.91 3.151a4 4 0 1 1 2.09 7.723V21h-12v-7.126A4.002 4.002 0 0 1 3.88 7.568a4 4 0 0 1 4.214-1.417A4 4 0 0 1 12.002 3M6.16 17.009 18 17" />
    </g>
    <defs>
      <clipPath id="chef-hat-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChefHatIcon;

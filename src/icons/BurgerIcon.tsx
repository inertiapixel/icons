import * as React from "react";
import type { SVGProps } from "react";
const SvgBurgerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#burger-icon_svg__a)"
    >
      <path d="M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4M12 4c3.784 0 6.954 2.133 7.787 5H4.215C5.048 6.133 8.218 4 12 4M5 12h14" />
    </g>
    <defs>
      <clipPath id="burger-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBurgerIcon;

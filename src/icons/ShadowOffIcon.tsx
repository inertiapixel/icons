import * as React from "react";
import type { SVGProps } from "react";
const SvgShadowOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shadow-off-icon_svg__a)"
    >
      <path d="M5.635 5.64a9 9 0 0 0 12.728 12.726m1.68-2.32A9 9 0 0 0 7.957 3.958M16 12h2M13 15h2M13 18h1M13 9h4M13 6h1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="shadow-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShadowOffIcon;

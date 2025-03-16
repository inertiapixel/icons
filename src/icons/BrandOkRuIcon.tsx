import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOkRuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-ok-ru-icon_svg__a)"
    >
      <path d="M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8" />
      <path d="M9.5 13c1.333.667 3.667.667 5 0M9.5 17l2.5-3 2.5 3M12 13.5v.5" />
    </g>
    <defs>
      <clipPath id="brand-ok-ru-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandOkRuIcon;

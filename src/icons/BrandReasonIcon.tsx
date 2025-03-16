import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandReasonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-reason-icon_svg__a)"
    >
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M18 18h-3v-6h3M18 15h-3M8 18v-6h2.5a1.5 1.5 0 1 1 0 3H8M12 18l-2-3" />
    </g>
    <defs>
      <clipPath id="brand-reason-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandReasonIcon;

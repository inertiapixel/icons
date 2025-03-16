import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNotionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-notion-icon_svg__a)"
    >
      <path d="M11 17.5V11h.5l4 6h.5v-6.5" />
      <path d="m19.077 20.07-11.53.888a1 1 0 0 1-.876-.397L4.2 17.267a1 1 0 0 1-.2-.6V5.926a1 1 0 0 1 .923-.997l11.389-.876a2 2 0 0 1 1.262.33l1.535 1.023A2 2 0 0 1 20 7.07v12.004a1 1 0 0 1-.923.997M4.5 5.5 7 8" />
      <path d="M20 7 7 8v12.5" />
    </g>
    <defs>
      <clipPath id="brand-notion-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandNotionIcon;

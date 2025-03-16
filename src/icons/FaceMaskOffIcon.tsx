import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceMaskOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#face-mask-off-icon_svg__a)"
    >
      <path d="M5 14.5h-.222C3.243 14.5 2 13.38 2 12s1.243-2.5 2.778-2.5H5M19 14.5h.222C20.756 14.5 22 13.38 22 12s-1.244-2.5-2.778-2.5H19M9 10h1m4 0h1M9 14h5" />
      <path d="M19 15.001v-6.49a2 2 0 0 0-1.45-1.923l-5-1.429a2 2 0 0 0-1.1 0l-1.788.511m-3.118.891-.094.027A2 2 0 0 0 5 8.51v6.982a2 2 0 0 0 1.45 1.923l5 1.43c.36.102.74.102 1.1 0l4.899-1.4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="face-mask-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFaceMaskOffIcon;

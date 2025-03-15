import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceMask = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#face-mask_svg__a)"
    >
      <path d="M5 14.5h-.222C3.243 14.5 2 13.38 2 12s1.243-2.5 2.778-2.5H5M19 14.5h.222C20.756 14.5 22 13.38 22 12s-1.244-2.5-2.778-2.5H19M9 10h6M9 14h6" />
      <path d="m12.55 18.844 5-1.429A2 2 0 0 0 19 15.492v-6.98a2 2 0 0 0-1.45-1.924l-5-1.429a2 2 0 0 0-1.1 0l-5 1.43A2 2 0 0 0 5 8.51v6.982a2 2 0 0 0 1.45 1.923l5 1.43c.36.102.74.102 1.1 0" />
    </g>
    <defs>
      <clipPath id="face-mask_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFaceMask;

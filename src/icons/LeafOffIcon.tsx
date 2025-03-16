import * as React from "react";
import type { SVGProps } from "react";
const SvgLeafOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#leaf-off-icon_svg__a)"
    >
      <path d="M5 21c.475-4.27 2.3-7.64 6.331-9.684" />
      <path d="M6.616 6.623C4.742 8.248 3.991 10.5 3.984 13c0 1 0 3 2 5h3.014c2.733 0 5.092-.635 6.92-2.087m1.9-2.099C19.04 11.942 19.803 9.38 19.997 6V4h-4.014c-2.863 0-5.118.405-6.86 1.118M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="leaf-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLeafOffIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgMaskOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mask-off-icon_svg__a)"
    >
      <path d="M19.42 19.41A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.055.588-1.417M8 4h10a2 2 0 0 1 2 2v10" />
      <path d="M9.887 9.87a3 3 0 1 0 4.245 4.24m.582-3.396a3 3 0 0 0-1.438-1.433M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="mask-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMaskOffIcon;

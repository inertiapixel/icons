import * as React from "react";
import type { SVGProps } from "react";
const SvgMelonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#melon-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 10.002c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-6.984-2.842l4.343-4.153a4 4 0 0 0 5.76-5.51l4.342-4.153A9.96 9.96 0 0 1 20 10.002"
      />
    </g>
    <defs>
      <clipPath id="melon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMelonIcon;

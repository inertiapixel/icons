import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAdobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-adobe_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.893 4.515 7.977 14a.993.993 0 0 1-.394 1.366 1.04 1.04 0 0 1-.5.127H16.5l-4.5-8-2.5 4H11l2 4H4.023c-.565 0-1.023-.45-1.023-1 0-.171.045-.34.13-.49l7.977-13.994a1.035 1.035 0 0 1 1.786 0z"
      />
    </g>
    <defs>
      <clipPath id="brand-adobe_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAdobe;

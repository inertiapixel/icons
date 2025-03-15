import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOpenvpn = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-openvpn_svg__a)"
    >
      <path d="m15.618 20.242-2.193-5.602a3 3 0 1 0-2.85 0l-2.192 5.603" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
    </g>
    <defs>
      <clipPath id="brand-openvpn_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandOpenvpn;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandItch = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-itch_svg__a)"
    >
      <path d="M2 7v1c0 1.087 1.078 2 2 2 1.107 0 2-.91 2-2 0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2 .922 0 2-.913 2-2V7q-.013-.412-1.588-2.068A3 3 0 0 0 18.238 4H5.762a3 3 0 0 0-2.174.932Q2.013 6.588 2 7M4 10q-.177 9.42.813 10.456c1.534.367 4.355.535 7.186.536 2.83-.001 5.652-.169 7.186-.536.99-1.037.898-9.559.814-10.456" />
      <path d="m10 16 2-2 2 2M12 14v4" />
    </g>
    <defs>
      <clipPath id="brand-itch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandItch;

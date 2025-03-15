import * as React from "react";
import type { SVGProps } from "react";
const SvgGift1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#gift-1_svg__a)"
    >
      <path d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 1 1 0-5c.965-.016 1.91.452 2.713 1.344C11.015 5.235 11.638 6.51 12 8c.362-1.49.985-2.764 1.787-3.656.803-.892 1.748-1.36 2.713-1.344a2.5 2.5 0 0 1 0 5" />
    </g>
    <defs>
      <clipPath id="gift-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGift1;

import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagDiscount = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flag-discount_svg__a)"
    >
      <path d="M12.804 14.64q-.436-.279-.804-.64a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v8M5 21v-7M16 21l5-5M21 21v.01M16 16v.01" />
    </g>
    <defs>
      <clipPath id="flag-discount_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlagDiscount;

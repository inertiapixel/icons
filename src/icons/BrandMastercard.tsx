import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMastercard = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-mastercard_svg__a)"
    >
      <path d="M11 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M12.001 9.765a3 3 0 1 0 0 4.47" />
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </g>
    <defs>
      <clipPath id="brand-mastercard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMastercard;

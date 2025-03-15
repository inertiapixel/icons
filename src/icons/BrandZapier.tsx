import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandZapier = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-zapier_svg__a)"
    >
      <path d="M3 12h6M21 12h-6M12 3v6M12 15v6M5.637 5.637 9.88 9.88M18.364 18.364l-4.243-4.243M18.364 5.637 14.121 9.88M9.88 14.121l-4.243 4.243" />
    </g>
    <defs>
      <clipPath id="brand-zapier_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandZapier;

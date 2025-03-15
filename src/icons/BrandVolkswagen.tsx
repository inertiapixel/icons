import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVolkswagen = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-volkswagen_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
      <path d="m5 7 4.5 11 1.5-5h2l1.5 5L19 7" />
      <path d="m9 4 2 6h2l2-6" />
    </g>
    <defs>
      <clipPath id="brand-volkswagen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandVolkswagen;

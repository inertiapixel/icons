import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSupernovaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-supernova-icon_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M15 15h.5c3.037 0 5.5-1.343 5.5-3s-2.463-3-5.5-3c-1.837 0-3.463.49-4.46 1.245M9 9h-.5C5.462 9 3 10.343 3 12s2.462 3 5.5 3c1.844 0 3.476-.495 4.474-1.255" />
      <path d="M15 9v-.5C15 5.462 13.657 3 12 3S9 5.462 9 8.5c0 1.833.49 3.457 1.241 4.456M9 15.001v.5c0 3.038 1.343 5.5 3 5.5s3-2.462 3-5.5c0-1.842-.494-3.472-1.252-4.47" />
    </g>
    <defs>
      <clipPath id="brand-supernova-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSupernovaIcon;

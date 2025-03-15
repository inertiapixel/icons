import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBadoo = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-badoo_svg__a)"
    >
      <path d="M22 9.43C22 15.268 17.523 20 12 20S2 15.338 2 9.5c0-2.667 1.83-5.01 4.322-5.429 2.492-.418 4.9 1.392 5.678 3.93.768-2.54 3.177-4.355 5.668-3.932C20.163 4.486 22 6.76 22 9.43z" />
      <path d="M7.5 10c0 2.761 2.015 5 4.5 5s4.5-2.239 4.5-5" />
    </g>
    <defs>
      <clipPath id="brand-badoo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBadoo;

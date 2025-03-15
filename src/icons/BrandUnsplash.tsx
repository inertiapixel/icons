import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandUnsplash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-unsplash_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 11h5v4h6v-4h5v9H4zm5-7h6v4H9z"
      />
    </g>
    <defs>
      <clipPath id="brand-unsplash_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandUnsplash;

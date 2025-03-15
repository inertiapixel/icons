import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandThreads = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brand-threads_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7.5Q17 3 12 3c-5 0-8 2.5-8 9s3.5 9 8 9 7-3 7-5-1-5-7-5c-2.5 0-3 1.25-3 2.5C9 15 10 16 11.5 16c2.5 0 3.5-1.5 3.5-5s-2-4-3-4q-1.5 0-2.5 1"
      />
    </g>
    <defs>
      <clipPath id="brand-threads_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandThreads;

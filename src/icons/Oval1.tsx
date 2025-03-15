import * as React from "react";
import type { SVGProps } from "react";
const SvgOval1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#oval-1_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12c0 2.387.632 4.676 1.757 6.364S10.41 21 12 21s3.117-.948 4.243-2.636C17.368 16.676 18 14.387 18 12s-.632-4.676-1.757-6.364S13.59 3 12 3s-3.117.948-4.243 2.636C6.632 7.324 6 9.613 6 12"
      />
    </g>
    <defs>
      <clipPath id="oval-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOval1;

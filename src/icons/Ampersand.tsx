import * as React from "react";
import type { SVGProps } from "react";
const SvgAmpersand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ampersand_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 20 8.595 9.028a2.948 2.948 0 0 1 .954-4.804 2.94 2.94 0 0 1 4.068 2.721c0 .781-.31 1.53-.86 2.083l-4.68 4.687a3.685 3.685 0 0 0 1.192 6.004 3.68 3.68 0 0 0 4.007-.797L19 13"
      />
    </g>
    <defs>
      <clipPath id="ampersand_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAmpersand;

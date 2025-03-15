import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNytimes = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-nytimes_svg__a)"
    >
      <path d="M11.038 5.059a8 8 0 1 0 8.706 9.965" />
      <path d="M12 21V10l-7.5 4M17.501 3a2.5 2.5 0 0 1 0 5l-11-5a2.5 2.5 0 0 0-.67 4.91M9 12v8M15.998 13h-.01" />
    </g>
    <defs>
      <clipPath id="brand-nytimes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandNytimes;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAppstore = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-appstore_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M8 16l1.106-1.99m1.4-2.522L13 7M7 14h5m2.9 0H17M16 16l-2.51-4.518m-1.486-2.677-1-1.805" />
    </g>
    <defs>
      <clipPath id="brand-appstore_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAppstore;

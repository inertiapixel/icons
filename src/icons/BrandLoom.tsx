import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLoom = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-loom_svg__a)"
    >
      <path d="M17.462 6.517a6 6 0 1 0-3.023 7.965" />
      <path d="M17.483 17.462a6 6 0 1 0-7.965-3.023" />
      <path d="M6.54 17.483a6 6 0 1 0 3.023-7.965" />
      <path d="M6.517 6.54a6 6 0 1 0 7.965 3.023" />
    </g>
    <defs>
      <clipPath id="brand-loom_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandLoom;

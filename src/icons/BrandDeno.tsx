import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDeno = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-deno_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M13.47 20.882 12 15c-2.649-.088-5-1.624-5-3.5C7 9.567 9.239 8 12 8s4 1 5 3q.036.072 2 6.5M12 11h.01" />
    </g>
    <defs>
      <clipPath id="brand-deno_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDeno;

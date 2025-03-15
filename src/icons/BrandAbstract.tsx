import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAbstract = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-abstract_svg__a)"
    >
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
      <path d="M8 13.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" />
      <path d="M8 8h8v8" />
    </g>
    <defs>
      <clipPath id="brand-abstract_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandAbstract;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBackbone = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-backbone_svg__a)"
    >
      <path d="m5 20 14-8L5 4z" />
      <path d="M19 20 5 12l14-8z" />
    </g>
    <defs>
      <clipPath id="brand-backbone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandBackbone;

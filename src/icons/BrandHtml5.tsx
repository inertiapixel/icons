import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandHtml5 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-html5_svg__a)"
    >
      <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
      <path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
    </g>
    <defs>
      <clipPath id="brand-html5_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandHtml5;

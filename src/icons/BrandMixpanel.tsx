import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMixpanel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-mixpanel_svg__a)"
    >
      <path d="M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M19 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M11 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
    <defs>
      <clipPath id="brand-mixpanel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMixpanel;

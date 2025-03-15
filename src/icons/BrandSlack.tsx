import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSlack = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-slack_svg__a)"
    >
      <path d="M16 12V6a2 2 0 1 0-4 0v6h6a2 2 0 1 0-2-2M12 16h6a2 2 0 0 0 0-4h-6v6a2 2 0 1 0 2-2M8 12v6a2 2 0 0 0 4 0v-6H6a2 2 0 1 0 2 2M12 8H6a2 2 0 0 0 0 4h6V6a2 2 0 1 0-2 2" />
    </g>
    <defs>
      <clipPath id="brand-slack_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSlack;

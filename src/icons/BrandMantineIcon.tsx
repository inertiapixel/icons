import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMantineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-mantine-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M11 16a4.97 4.97 0 0 0 2-4 5.01 5.01 0 0 0-2-4M14 9h-2M14 15h-2M10 12h.01" />
    </g>
    <defs>
      <clipPath id="brand-mantine-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMantineIcon;

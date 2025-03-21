import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDrupalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-drupal-icon_svg__a)"
    >
      <path d="M12 2c0 4.308-7 6-7 12a7 7 0 1 0 14 0c0-6-7-7.697-7-12" />
      <path d="M12 11.33a66 66 0 0 1-2.012 2.023C8.988 14.31 8 15.32 8 17c0 2.17 1.79 4 4 4s4-1.827 4-4c0-1.676-.989-2.685-1.983-3.642q-.63-.606-5.517-5.858z" />
    </g>
    <defs>
      <clipPath id="brand-drupal-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDrupalIcon;

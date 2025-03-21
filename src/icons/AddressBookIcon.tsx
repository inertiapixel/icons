import * as React from "react";
import type { SVGProps } from "react";
const SvgAddressBookIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#address-book-icon_svg__a)"
    >
      <path d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M10 16h6" />
      <path d="M11 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 8h3M4 12h3M4 16h3" />
    </g>
    <defs>
      <clipPath id="address-book-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddressBookIcon;

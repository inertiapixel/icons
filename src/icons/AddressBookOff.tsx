import * as React from "react";
import type { SVGProps } from "react";
const SvgAddressBookOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#address-book-off_svg__a)"
    >
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363.37-.87.601-1.43.601H8a2 2 0 0 1-2-2V6M10 16h6" />
      <path d="M11 11a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M4 8h3M4 12h3M4 16h3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="address-book-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddressBookOff;

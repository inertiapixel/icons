import * as React from "react";
import type { SVGProps } from "react";
const SvgLibraryPhotoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#library-photo-icon_svg__a)"
    >
      <path d="M7 5.667A2.667 2.667 0 0 1 9.667 3h8.666A2.667 2.667 0 0 1 21 5.667v8.666A2.67 2.67 0 0 1 18.333 17H9.667A2.667 2.667 0 0 1 7 14.333z" />
      <path d="M4.012 7.262A2 2 0 0 0 3 8.999v10c0 1.1.9 2 2 2h10c.75 0 1.158-.385 1.5-1M17 7h.01" />
      <path d="m7 12.999 3.644-3.644a1.21 1.21 0 0 1 1.712 0L16 12.999" />
      <path d="m15 11.999 1.644-1.644a1.21 1.21 0 0 1 1.712 0L21 12.999" />
    </g>
    <defs>
      <clipPath id="library-photo-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLibraryPhotoIcon;

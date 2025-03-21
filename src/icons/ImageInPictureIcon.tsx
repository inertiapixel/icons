import * as React from "react";
import type { SVGProps } from "react";
const SvgImageInPictureIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#image-in-picture-icon_svg__a)"
    >
      <path d="M13 15c-2 0-5 1-5 5" />
      <path d="M4 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 7V5a1 1 0 0 1 1-1h2M11 4h2M17 4h2a1 1 0 0 1 1 1v2M20 11v2M20 17v2a1 1 0 0 1-1 1h-2" />
    </g>
    <defs>
      <clipPath id="image-in-picture-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgImageInPictureIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-plus-icon_svg__a)"
    >
      <path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" />
      <path d="m3 16.002 5-5c.928-.893 2.072-.893 3 0l4 4M14 13.999l1-1c.67-.645 1.45-.825 2.182-.54M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="photo-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoPlusIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgHelmetOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#helmet-off-icon_svg__a)"
    >
      <path d="M8.633 4.653a9 9 0 0 1 11.718 11.7m-1.503 2.486A9 9 0 0 1 17.656 20H6.344a9 9 0 0 1-.185-13.847" />
      <path d="M19.999 9h-7m-2.769 1.246q.761 3 3.268 4.254.786.393 1.64.683M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="helmet-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelmetOffIcon;

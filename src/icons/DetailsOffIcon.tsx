import * as React from "react";
import type { SVGProps } from "react";
const SvgDetailsOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#details-off-icon_svg__a)"
    >
      <path d="M5 19h14M20.985 16.985a2 2 0 0 0-.146-.735L13.74 4a2 2 0 0 0-3.5 0l-.82 1.418m-1.47 2.534L3.14 16.25A2 2 0 0 0 4.89 19M12 3v5m0 4v7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="details-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDetailsOffIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgNewsOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#news-off-icon_svg__a)"
    >
      <path d="M16 6h3a1 1 0 0 1 1 1v9m-.606 3.435A2 2 0 0 1 16 18v-2m0-4V5a1 1 0 0 0-1-1H8m-3.735.321A1 1 0 0 0 4 5v12a3 3 0 0 0 3 3h11M8 12h4M8 16h4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="news-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNewsOffIcon;

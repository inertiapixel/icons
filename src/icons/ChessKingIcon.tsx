import * as React from "react";
import type { SVGProps } from "react";
const SvgChessKingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chess-king-icon_svg__a)">
      <path d="M12 2a1 1 0 0 1 .993.883L13 3v2h2a1 1 0 0 1 .117 1.993L15 7h-2v1.758a4.5 4.5 0 0 1 2.033-.734l.24-.018L15.5 8a4.5 4.5 0 0 1 4.5 4.5 4.504 4.504 0 0 1-4.064 4.478l-.217.016L15.5 17h-7a4.5 4.5 0 1 1 2.501-8.241L11 7H9a1 1 0 0 1-.117-1.993L9 5h2V3a1 1 0 0 1 1-1M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" />
    </g>
    <defs>
      <clipPath id="chess-king-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessKingIcon;

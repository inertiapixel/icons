import * as React from "react";
import type { SVGProps } from "react";
const SvgChessRookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chess-rook-icon_svg__a)">
      <path d="M14 3.001a1 1 0 0 1 .992.883l.007.117v2h1.652l.363-2.164a1 1 0 0 1 1.034-.836l.116.013a1 1 0 0 1 .835 1.035l-.012.116-.5 3a1 1 0 0 1-.865.83L17.5 8h-1.384l.878 7.89a1 1 0 0 1-.878 1.103l-.117.007H8a1 1 0 0 1-1-.993l.006-.117.877-7.89H6.5a1 1 0 0 1-.96-.718l-.026-.118-.5-3a1 1 0 0 1 1.947-.442l.025.114.361 2.164H9v-2a1 1 0 0 1 1.993-.117l.007.117v2h2v-2a1 1 0 0 1 1-1M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" />
    </g>
    <defs>
      <clipPath id="chess-rook-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessRookIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgChessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chess-icon_svg__a)">
      <path d="M11.999 2a4 4 0 0 1 4 4 5 5 0 0 1-.438 2.001L15.999 8a1 1 0 0 1 .117 1.993l-.117.007h-1.263l1.24 5.79a1 1 0 0 1-.747 1.184l-.113.02-.117.006h-6a1 1 0 0 1-.996-1.093l.018-.117L9.26 10H7.999a1 1 0 0 1-.117-1.993L7.999 8h.438a5.2 5.2 0 0 1-.412-1.525l-.02-.259L7.999 6a4 4 0 0 1 4-4M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" />
    </g>
    <defs>
      <clipPath id="chess-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessIcon;

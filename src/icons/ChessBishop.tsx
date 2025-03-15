import * as React from "react";
import type { SVGProps } from "react";
const SvgChessBishop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chess-bishop_svg__a)">
      <path d="M12 2a2 2 0 0 1 1.386 3.442q.969.42 1.74 1.017l-3.833 3.834-.083.094a1 1 0 0 0 1.403 1.403l.094-.083 3.814-3.813C17.498 9.244 18 10.964 18 13c0 1.913-1.178 3.722-3.089 3.973l-.2.02L14.5 17h-5C7.374 17 6 15.076 6 13c0-3.68 1.57-6.255 4.613-7.56A2 2 0 0 1 12 2M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" />
    </g>
    <defs>
      <clipPath id="chess-bishop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessBishop;

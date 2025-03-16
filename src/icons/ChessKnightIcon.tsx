import * as React from "react";
import type { SVGProps } from "react";
const SvgChessKnightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#chess-knight-icon_svg__a)">
      <path d="m8.96 1.988-.146.028-.115.03a1 1 0 0 0-.646 1.27l.749 2.244-2.815 1.735a2 2 0 0 0-.655 2.751l.089.133a2 2 0 0 0 1.614.82l1.563-.002-1.614 4.674a1 1 0 0 0 .945 1.327h7.96a1 1 0 0 0 1-.978l.113-5c0-3.827-1.555-6.878-4.67-7.966l-2.4-.83-.374-.12-.258-.075L9.165 2l-.101-.014h-.055zM18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" />
    </g>
    <defs>
      <clipPath id="chess-knight-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessKnightIcon;

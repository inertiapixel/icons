import * as React from "react";
import type { SVGProps } from "react";
const SvgChessKing1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chess-king-1_svg__a)"
    >
      <path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16z" />
      <path d="M8.5 16a3.5 3.5 0 1 1 3.162-5h.674a3.5 3.5 0 1 1 3.163 5zM9 6h6M12 3v8" />
    </g>
    <defs>
      <clipPath id="chess-king-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessKing1;

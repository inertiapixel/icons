import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinRupee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#coin-rupee_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M15 7H9c-1.287 0-1.332 1.864-.133 1.993L9 9h1a2 2 0 0 1 1.732 1H9a1 1 0 1 0 0 2h2.732A2 2 0 0 1 10 13H9c-.89 0-1.337 1.077-.707 1.707l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32l-1.484-1.485.113-.037A4.01 4.01 0 0 0 13.874 12L15 12a1 1 0 0 0 0-2h-1.126a4 4 0 0 0-.33-.855L13.465 9H15a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 15 7"
      />
    </g>
    <defs>
      <clipPath id="coin-rupee_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoinRupee;

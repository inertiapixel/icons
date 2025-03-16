import * as React from "react";
import type { SVGProps } from "react";
const SvgBooksIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#books-icon_svg__a)"
    >
      <path d="M5 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM9 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM5 8h4M9 16h4" />
      <path d="m13.801 4.56 2.184-.53c.562-.134 1.133.19 1.282.733l3.695 13.417a1.02 1.02 0 0 1-.634 1.22l-.133.04-2.184.53c-.562.136-1.133-.19-1.282-.732L13.034 5.821a1.02 1.02 0 0 1 .634-1.22zM14 9l4-1M16 16l3.923-.98" />
    </g>
    <defs>
      <clipPath id="books-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBooksIcon;

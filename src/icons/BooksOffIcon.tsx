import * as React from "react";
import type { SVGProps } from "react";
const SvgBooksOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#books-off-icon_svg__a)"
    >
      <path d="M9 9v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5M8 4a1 1 0 0 1 1 1M9 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M13 13v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9M5 8h3M9 16h4" />
      <path d="M14.252 10.245 13.034 5.82a1.02 1.02 0 0 1 .634-1.22l.133-.04 2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75M19.583 19.59l-1.572.38c-.562.136-1.133-.19-1.282-.73l-.952-3.459M14 9l4-1M19.207 15.2l.716-.18M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="books-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBooksOffIcon;

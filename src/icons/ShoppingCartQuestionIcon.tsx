import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCartQuestionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shopping-cart-question-icon_svg__a)"
    >
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M13.5 17H6V3H4" />
      <path d="m6 5 14 1-.714 5M14.5 13H6M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
    </g>
    <defs>
      <clipPath id="shopping-cart-question-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCartQuestionIcon;

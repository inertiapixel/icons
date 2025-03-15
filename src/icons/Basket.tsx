import * as React from "react";
import type { SVGProps } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#basket_svg__a)">
      <path
        fill="currentColor"
        d="M15.948 3.684 17.052 7h1.947a3 3 0 0 1 2.962 3.477l-1.252 7.131A4 4 0 0 1 16.755 21H7.243a3.994 3.994 0 0 1-3.95-3.37l-1.258-7.174A3 3 0 0 1 4.999 7h1.945l1.105-3.316a1 1 0 1 1 1.898.632L9.052 7h5.893l-.895-2.684a1 1 0 0 1 1.898-.632M11.998 11a3 3 0 0 0-2.994 2.824L8.999 14a3 3 0 1 0 3-3"
      />
    </g>
    <defs>
      <clipPath id="basket_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasket;

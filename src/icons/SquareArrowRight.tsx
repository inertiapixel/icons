import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#square-arrow-right_svg__a)">
      <path
        fill="currentColor"
        d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6.387 5.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L13.585 11H8l-.117.007A1 1 0 0 0 8 13h5.585l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l4-4 .073-.082.074-.104.052-.098.044-.11.03-.112.017-.126L17 12l-.007-.118-.029-.148-.035-.105-.054-.113-.071-.111a1 1 0 0 0-.097-.112l-4-4z"
      />
    </g>
    <defs>
      <clipPath id="square-arrow-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSquareArrowRight;

import * as React from "react";
import type { SVGProps } from "react";
const SvgClick = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#click_svg__a)"
    >
      <path d="M3 12h3M12 3v3M7.802 7.802l-2.2-2.2M16.2 7.802l2.2-2.2M7.802 16.2l-2.2 2.2M12 12l9 3-4 2-2 4z" />
    </g>
    <defs>
      <clipPath id="click_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClick;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessPoint = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#access-point_svg__a)"
    >
      <path d="M12 12v.01M14.828 9.172a4 4 0 0 1 0 5.656M17.656 6.344a8 8 0 0 1 0 11.314M9.167 14.828a4 4 0 0 1 0-5.656M6.335 17.658a8 8 0 0 1 0-11.314" />
    </g>
    <defs>
      <clipPath id="access-point_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAccessPoint;

import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-up_svg__a)"
    >
      <path d="M12.44 20.876q-.219.066-.441.124a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3c.607 2.063.648 4.252.119 6.336M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="shield-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldUp;

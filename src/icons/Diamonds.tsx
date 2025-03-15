import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamonds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#diamonds_svg__a)">
      <path
        fill="currentColor"
        d="M12 2.004c-.777 0-1.508.367-1.97.99L4.668 9.889c-.89 1.136-.89 3.083 0 4.227l5.375 6.91a2.458 2.458 0 0 0 3.93-.016l5.36-6.894c.89-1.136.89-3.083 0-4.227L13.96 2.978A2.45 2.45 0 0 0 12 2.004"
      />
    </g>
    <defs>
      <clipPath id="diamonds_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiamonds;

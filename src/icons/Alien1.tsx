import * as React from "react";
import type { SVGProps } from "react";
const SvgAlien1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alien-1_svg__a)"
    >
      <path d="M11 17a2.5 2.5 0 0 0 2 0" />
      <path d="M12.002 3C7.338 3 4.606 5.331 4.14 8.595a11.82 11.82 0 0 0 2 8.592 10.8 10.8 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.8 10.8 0 0 0 3.199-3.064 11.9 11.9 0 0 0 2-8.592C19.402 5.33 16.67 3 12.006 3zM8 11l2 2M16 11l-2 2" />
    </g>
    <defs>
      <clipPath id="alien-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlien1;

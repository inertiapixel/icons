import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coffee_svg__a)"
    >
      <path d="M3 14c.83.643 2.077 1.018 3.5 1 1.423.018 2.67-.357 3.5-1 .83-.641 2.077-1.016 3.5-1 1.423-.016 2.67.359 3.5 1M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2M12 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
      <path d="M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" />
      <path d="M16.746 16.726a3 3 0 1 0 .252-5.555" />
    </g>
    <defs>
      <clipPath id="coffee_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoffee;

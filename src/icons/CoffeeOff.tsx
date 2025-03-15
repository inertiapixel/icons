import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffeeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#coffee-off_svg__a)"
    >
      <path d="M3 14.002c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1 .73-.565 1.783-.923 3-.99M7.998 3q-.292.211-.506.49M12 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
      <path d="M14 10h3v3m-.257 3.743A6 6 0 0 1 11 21H9a6 6 0 0 1-6-6v-5h7" />
      <path d="M20.114 16.125a3 3 0 0 0-3.118-4.953M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="coffee-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoffeeOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDice3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#dice-3_svg__a)">
      <path
        fill="currentColor"
        d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      />
    </g>
    <defs>
      <clipPath id="dice-3_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDice3;

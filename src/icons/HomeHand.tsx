import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeHand = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-hand_svg__a)"
    >
      <path d="m18 9-6-6-9 9h2v7a2 2 0 0 0 2 2h3.5" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2M16 17.5l-.585-.578a1.516 1.516 0 0 0-2 0c-.477.433-.551 1.112-.177 1.622L14.999 21c.37.506 1.332 1 2 1h3c1.01 0 1.498-.683 1.623-1.593Q22 19 22 18c0-1-.94-1.843-2-2h-1v-2.636C19 12.61 18.328 12 17.5 12s-1.5.61-1.5 1.364z" />
    </g>
    <defs>
      <clipPath id="home-hand_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeHand;

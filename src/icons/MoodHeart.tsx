import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodHeart = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-heart_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-8.012 8.946M9 10h.01M15 10h.01" />
      <path d="M9.5 15a3.6 3.6 0 0 0 2.774.99M18.994 21.5l2.518-2.58a1.74 1.74 0 0 0 .004-2.414 1.627 1.627 0 0 0-2.346-.005l-.168.172-.168-.171a1.626 1.626 0 0 0-2.346-.005 1.74 1.74 0 0 0-.004 2.413z" />
    </g>
    <defs>
      <clipPath id="mood-heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodHeart;

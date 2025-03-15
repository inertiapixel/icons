import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSymfony = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-symfony_svg__a)"
    >
      <path d="M6 13q.687 1 2 1c1.313 0 2-.875 2-1.5 0-1.5-2-1-2-2C8 9.875 8.516 9 9.5 9c2.5 0 1.563 2 5.5 2q1 0 1-1" />
      <path d="M9 17q-.143 1 1 1 2.571 0 3-6c.286-4 1.571-6 3-6q.857 0 1 1" />
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a10 10 0 0 1 10 10" />
    </g>
    <defs>
      <clipPath id="brand-symfony_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandSymfony;

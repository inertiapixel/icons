import * as React from "react";
import type { SVGProps } from "react";
const SvgMoonStars = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#moon-stars_svg__a)"
    >
      <path d="M12.002 3h.393a7.5 7.5 0 0 0 7.92 12.446 9 9 0 1 1-8.313-12.454zM17 4a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2M19 11h2m-1-1v2" />
    </g>
    <defs>
      <clipPath id="moon-stars_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoonStars;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandReact = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-react_svg__a)"
    >
      <path d="M6.306 8.71C3.704 9.435 2 10.638 2 12c0 2.21 4.477 4 10 4 .773 0 1.526-.035 2.248-.102M17.692 15.289C20.295 14.567 22 13.363 22 12c0-2.21-4.477-4-10-4-.773 0-1.526.035-2.25.102" />
      <path d="M6.306 15.287c-.676 2.615-.485 4.693.695 5.373 1.913 1.105 5.703-1.877 8.464-6.66q.581-1.007 1.036-2M17.695 8.715c.677-2.616.487-4.696-.694-5.376-1.913-1.105-5.703 1.877-8.464 6.66A25 25 0 0 0 7.5 12" />
      <path d="M12.001 5.424c-1.925-1.892-3.82-2.766-5-2.084C5.088 4.444 5.775 9.217 8.537 14c.386.67.793 1.304 1.212 1.896M12 18.573c1.926 1.893 3.821 2.768 5 2.086 1.913-1.104 1.226-5.877-1.536-10.66q-.563-.975-1.212-1.897M11.498 12.867a1 1 0 1 0 1.012-1.726 1 1 0 0 0-1.012 1.726" />
    </g>
    <defs>
      <clipPath id="brand-react_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandReact;

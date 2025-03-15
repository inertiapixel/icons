import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCode = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-code_svg__a)"
    >
      <path d="m19.499 12.572-.536.53m-7.91 5.96-6.554-6.489a5 5 0 1 1 7.5-6.567 5 5 0 1 1 7.5 6.572M20 21l2-2-2-2M17 17l-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="heart-code_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartCode;

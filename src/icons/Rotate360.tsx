import * as React from "react";
import type { SVGProps } from "react";
const SvgRotate360 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rotate-360_svg__a)"
    >
      <path d="M12 16h4v4" />
      <path d="M19.458 11.042c.86-2.366.722-4.58-.6-5.9-2.272-2.274-7.185-1.045-10.973 2.743s-5.017 8.7-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515" />
    </g>
    <defs>
      <clipPath id="rotate-360_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRotate360;

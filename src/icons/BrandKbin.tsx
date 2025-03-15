import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandKbin = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.838}
      clipPath="url(#brand-kbin_svg__a)"
    >
      <path d="M10.585 9.506h-2.43C7.721 8.574 7.455 8 6.56 8l-2.404.019c-.662 0-1.353.592-1.103 1.487l2.216 9.436C5.754 20.685 6.08 21 6.413 21h.64" />
      <path d="M14.275 3h5.645c.84 0 1.24.714 1.02 1.287l-4.687 15.109c-.42 1.133-1.159 1.603-2.354 1.603H6.414c.39 0 .76-.618 1.296-2.061l4.457-14.49c.326-.83.76-1.448 2.108-1.448" />
    </g>
    <defs>
      <clipPath id="brand-kbin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandKbin;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOauth = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-oauth_svg__a)"
    >
      <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0" />
      <path d="M12.555 6c.65 0 1.235.373 1.508.947l2.838 7.848a1.647 1.647 0 0 1-1.01 2.108 1.673 1.673 0 0 1-2.068-.851L13.363 15h-2.73l-.397.905a1.67 1.67 0 0 1-1.978 1.045l-.153-.047a1.647 1.647 0 0 1-1.056-1.956l2.824-7.852a1.66 1.66 0 0 1 1.41-1.087z" />
    </g>
    <defs>
      <clipPath id="brand-oauth_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandOauth;

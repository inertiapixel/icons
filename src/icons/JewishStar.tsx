import * as React from "react";
import type { SVGProps } from "react";
const SvgJewishStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#jewish-star_svg__a)">
      <path
        fill="currentColor"
        d="M8.434 5.999H3l-.114.006a1 1 0 0 0-.743 1.508l2.69 4.486-2.69 4.486-.054.1A1 1 0 0 0 3 17.999h5.435l2.709 4.514.074.108a1 1 0 0 0 1.64-.108l2.708-4.514H21l.114-.006a1 1 0 0 0 .743-1.508l-2.691-4.486 2.69-4.486.055-.1A1 1 0 0 0 21 5.999h-5.434l-2.71-4.514a1 1 0 0 0-1.713 0z"
      />
    </g>
    <defs>
      <clipPath id="jewish-star_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJewishStar;

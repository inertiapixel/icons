import * as React from "react";
import type { SVGProps } from "react";
const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#caret-down_svg__a)">
      <path
        fill="currentColor"
        d="M18.002 9c.852 0 1.297.986.783 1.623l-.076.084-6 6a1 1 0 0 1-1.32.083l-.094-.083-6-6-.083-.094-.054-.077-.054-.096-.017-.036-.027-.067-.032-.108-.01-.053-.01-.06-.004-.057v-.118l.005-.058.009-.06.01-.052.032-.108.027-.067.07-.132.065-.09.073-.081.094-.083.077-.054.096-.054.036-.017.067-.027.108-.032.053-.01.06-.01.057-.004z"
      />
    </g>
    <defs>
      <clipPath id="caret-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCaretDown;

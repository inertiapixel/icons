import * as React from "react";
import type { SVGProps } from "react";
const SvgFishBone = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fish-bone_svg__a)"
    >
      <path d="M16.69 7.441a6.97 6.97 0 0 0-1.69 4.56 6.97 6.97 0 0 0 1.699 4.571c1.914-.684 3.691-2.183 5.301-4.565-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504q1.158 1.304 2.422 2.504A40 40 0 0 0 2 14.506M18 11v.01M4.422 12H15M7 10v4M11 8v8" />
    </g>
    <defs>
      <clipPath id="fish-bone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFishBone;

import * as React from "react";
import type { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#tree_svg__a)"
    >
      <path d="m12 13-2-2M12 12l2-2M12 21V8M9.823 15.999a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.834A3 3 0 0 1 12 3.768a3 3 0 0 1 4.614 3.707 3 3 0 0 1 .305 4.834A3 3 0 0 1 14 16.003h-4z" />
    </g>
    <defs>
      <clipPath id="tree_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTree;

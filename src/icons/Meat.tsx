import * as React from "react";
import type { SVGProps } from "react";
const SvgMeat = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#meat_svg__a)"
    >
      <path d="m13.621 8.381 1.966-1.967A2 2 0 1 1 19.001 5a2 2 0 1 1-1.413 3.414l-1.82 1.821M5.906 18.597c2.733 2.734 5.9 4 7.07 2.83 1.172-1.173-.094-4.339-2.828-7.072-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1" />
      <path d="M12.973 21.426c3.905-3.906 4.855-9.288 2.121-12.021-2.733-2.734-8.115-1.784-12.02 2.12" />
    </g>
    <defs>
      <clipPath id="meat_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMeat;

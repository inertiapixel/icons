import * as React from "react";
import type { SVGProps } from "react";
const SvgMeatOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#meat-off-icon_svg__a)"
    >
      <path d="m13.621 8.381 1.966-1.967A2 2 0 1 1 19.001 5a2 2 0 1 1-1.413 3.414l-1.82 1.821M5.906 18.597c2.733 2.734 5.9 4 7.07 2.83 1.172-1.173-.094-4.339-2.828-7.072-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1" />
      <path d="M12.977 21.427c1.582-1.582 2.679-3.407 3.242-5.2M16.598 12.6c-.16-1.238-.653-2.345-1.504-3.195-.85-.85-1.955-1.344-3.192-1.503M8.272 8.285c-1.792.563-3.616 1.66-5.198 3.242M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="meat-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMeatOffIcon;

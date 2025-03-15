import * as React from "react";
import type { SVGProps } from "react";
const SvgChessBishop1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chess-bishop-1_svg__a)"
    >
      <path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zM11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9.5 16C7.833 16 7 14.331 7 13q0-5.5 5-7c3.333 1 5 3.427 5 7 0 1.284-.775 2.881-2.325 3H9.5M15 8l-3 3M12 5v1" />
    </g>
    <defs>
      <clipPath id="chess-bishop-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChessBishop1;

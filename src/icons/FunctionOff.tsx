import * as React from "react";
import type { SVGProps } from "react";
const SvgFunctionOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#function-off_svg__a)"
    >
      <path d="M9 15.5v.25c0 .69.56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374-1.244L12 12m.363-3.63.013-.126A1.38 1.38 0 0 1 13.75 7c.69 0 1.25.56 1.25 1.25v.25" />
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.547.22-1.043.576-1.405M9 12h3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="function-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFunctionOff;

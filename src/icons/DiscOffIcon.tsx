import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#disc-off-icon_svg__a)"
    >
      <path d="M20.044 16.04A9 9 0 0 0 7.962 3.954M5.63 5.643A9 9 0 0 0 12 21c2.491 0 4.73-1 6.36-2.631" />
      <path d="M11.3 11.29a1 1 0 0 0 1.401 1.426M7 12c0-1.38.559-2.629 1.462-3.534m2.607-1.38Q11.522 7.001 12 7M12 17a4.99 4.99 0 0 0 3.551-1.48m1.362-2.587q.086-.454.087-.933M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="disc-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiscOffIcon;

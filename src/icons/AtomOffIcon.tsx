import * as React from "react";
import type { SVGProps } from "react";
const SvgAtomOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#atom-off-icon_svg__a)"
    >
      <path d="M12 12v.01M9.173 9.173c-3.906 3.905-5.805 8.337-4.243 9.9 1.562 1.56 6-.338 9.9-4.244m1.883-2.113c2.587-3.277 3.642-6.502 2.358-7.786s-4.508-.23-7.784 2.357" />
      <path d="M4.93 4.93c-1.562 1.562.337 6 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242M19 15c-.767-1.794-2.215-3.872-4.172-5.828C12.885 7.228 10.787 5.77 9 5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="atom-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAtomOffIcon;

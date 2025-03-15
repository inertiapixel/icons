import * as React from "react";
import type { SVGProps } from "react";
const SvgAtom = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#atom_svg__a)"
    >
      <path d="M12 12v.01M19.072 4.93c-1.562-1.562-6 .337-9.9 4.243-3.905 3.905-5.804 8.337-4.242 9.9 1.562 1.56 6-.338 9.9-4.244 3.905-3.905 5.804-8.336 4.242-9.9" />
      <path d="M4.93 4.93c-1.562 1.562.337 6 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242 1.56-1.562-.338-6-4.244-9.9-3.905-3.905-8.336-5.804-9.9-4.242" />
    </g>
    <defs>
      <clipPath id="atom_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAtom;

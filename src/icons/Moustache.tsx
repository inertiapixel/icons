import * as React from "react";
import type { SVGProps } from "react";
const SvgMoustache = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#moustache_svg__a)"
    >
      <path d="M14.999 9a3 3 0 0 1 2.599 1.5c.933 1.333 2.133 1.556 3.126 1.556h.29l.77-.044h.214q-1.445 2.888-6.6 3h-.565a3.001 3.001 0 1 1 .165-6z" />
      <path d="M8.999 9A3 3 0 0 0 6.4 10.5c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044H2q1.445 2.888 6.6 3h.565a3.001 3.001 0 0 0-.165-6z" />
    </g>
    <defs>
      <clipPath id="moustache_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoustache;

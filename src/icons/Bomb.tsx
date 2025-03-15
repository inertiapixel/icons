import * as React from "react";
import type { SVGProps } from "react";
const SvgBomb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bomb_svg__a)">
      <path d="M14.497 3.996a2.2 2.2 0 0 1 1.556.645l3.302 3.301a2.2 2.2 0 0 1 0 3.113l-.567.567.043.192a8.5 8.5 0 0 1-3.732 8.83l-.23.144a8.5 8.5 0 1 1-2.687-15.623l.192.042.567-.566a2.2 2.2 0 0 1 1.362-.636zM9.998 9a4 4 0 0 0-4 4 1 1 0 1 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2" />
      <path d="M20.999 2a1 1 0 0 1 .117 1.993L20.999 4h-1c0 .83-.302 1.629-.846 2.25l-.154.163-1.293 1.293a1 1 0 0 1-1.497-1.32l.083-.094L17.585 5c.232-.232.375-.537.407-.86l.007-.14a2 2 0 0 1 1.85-1.995l.15-.005z" />
    </g>
    <defs>
      <clipPath id="bomb_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBomb;

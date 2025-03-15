import * as React from "react";
import type { SVGProps } from "react";
const SvgGhost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ghost_svg__a)">
      <path
        fill="currentColor"
        d="M11.998 3a8 8 0 0 1 7.996 7.75l.004.25v6.954l.01.103a2.78 2.78 0 0 1-1.469 2.618l-.163.08c-1.053.475-2.283.248-3.129-.593l-.137-.146a.65.65 0 0 0-1.024 0 2.65 2.65 0 0 1-4.176 0 .65.65 0 0 0-.512-.25c-.2 0-.389.092-.55.296a2.78 2.78 0 0 1-4.859-2.005l.008-.091L3.998 11l.004-.25A8 8 0 0 1 11.998 3m2.82 10.429a1 1 0 0 0-1.39-.25 2.5 2.5 0 0 1-2.859 0 1 1 0 0 0-1.142 1.642 4.5 4.5 0 0 0 5.142 0 1 1 0 0 0 .25-1.392M10.008 9l-.127.007A1 1 0 0 0 9.998 11l.127-.007A1 1 0 0 0 10.008 9m4 0-.127.007A1 1 0 0 0 13.998 11l.127-.007A1 1 0 0 0 14.008 9"
      />
    </g>
    <defs>
      <clipPath id="ghost_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGhost;

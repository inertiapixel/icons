import * as React from "react";
import type { SVGProps } from "react";
const SvgZeppelinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#zeppelin-icon_svg__a)">
      <path
        fill="currentColor"
        d="M13.5 3c5.186 0 9.5 3.044 9.5 7 0 3.017-2.509 5.503-6 6.514V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4.046a21 21 0 0 1-2.66-1.411l-.13-.082-1.57 1.308a1 1 0 0 1-1.635-.656L3 15v-2.851l-.31-.25a47 47 0 0 1-.682-.568l-.67-.582a1 1 0 0 1 0-1.498q.665-.588 1.351-1.151L3 7.85V5a1 1 0 0 1 1.55-.836l.09.068 1.57 1.307.128-.08c2.504-1.553 4.784-2.378 6.853-2.453zM11 16.657V19h4v-2.086q-.735.086-1.5.086a9.6 9.6 0 0 1-2.13-.252z"
      />
    </g>
    <defs>
      <clipPath id="zeppelin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZeppelinIcon;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionSign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#direction-sign_svg__a)">
      <path
        fill="currentColor"
        d="M10.52 2.613a2.095 2.095 0 0 1 2.835-.117l.126.117 7.905 7.905c.777.777.816 2.013.117 2.836l-.117.126-7.905 7.905a2.094 2.094 0 0 1-2.836.117l-.126-.117-7.907-7.906a2.096 2.096 0 0 1-.115-2.835l.117-.126 7.905-7.905m5.969 9.535.01-.116-.003-.12-.016-.114-.03-.11-.044-.112-.052-.098-.076-.105-.07-.08-3.5-3.5-.095-.084a1 1 0 0 0-1.226 0l-.094.083-.083.094a1 1 0 0 0 0 1.226l.083.094L13.085 11H8l-.117.007a1 1 0 0 0 0 1.986L8 13h5.085l-1.792 1.793-.083.094a1 1 0 0 0 1.403 1.403l.094-.083 3.5-3.5.097-.112.05-.074.037-.067.05-.112.023-.076z"
      />
    </g>
    <defs>
      <clipPath id="direction-sign_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDirectionSign;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#award-icon_svg__a)">
      <path d="m19.496 13.984 1.966 3.406a1 1 0 0 1-.705 1.488l-.113.011h-.112l-2.933-.19-1.303 2.635a1 1 0 0 1-1.608.26l-.082-.094-.072-.11-1.968-3.407a9 9 0 0 0 6.93-3.999M11.43 17.98 9.466 21.39a1.002 1.002 0 0 1-1.622.157l-.076-.1-.064-.115-1.304-2.634-2.931.19a1 1 0 0 1-1.022-1.29l.04-.108.05-.1 1.968-3.408a9 9 0 0 0 6.927 4M12 2l.24.004A7 7 0 0 1 19 9l-.003.193-.007.192-.018.245-.026.242-.024.178a7 7 0 0 1-.317 1.268l-.116.308-.153.348a7 7 0 0 1-12.688-.028l-.13-.297-.052-.133-.08-.217-.095-.294a7 7 0 0 1-.093-.344l-.06-.271-.049-.271-.02-.139-.039-.323-.024-.365L5 9a7 7 0 0 1 6.76-6.996z" />
    </g>
    <defs>
      <clipPath id="award-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAwardIcon;

import React from "react";

export const DiamondsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58232)">
<path d="M12.0005 2.00391C11.2235 2.00391 10.4925 2.37091 10.0295 2.99391L4.6675 9.88891C3.7775 11.0249 3.7775 12.9719 4.6675 14.1159L10.0425 21.0269C10.2727 21.3308 10.5705 21.577 10.9123 21.746C11.2541 21.915 11.6305 22.0021 12.0117 22.0004C12.393 21.9988 12.7687 21.9084 13.109 21.7365C13.4493 21.5646 13.7449 21.3158 13.9725 21.0099L19.3335 14.1159C20.2235 12.9799 20.2235 11.0329 19.3335 9.88891L13.9585 2.97791C13.7301 2.67477 13.4342 2.42896 13.0944 2.2599C12.7546 2.09085 12.3801 2.00321 12.0005 2.00391Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58232">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

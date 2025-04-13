import React from "react";

export const RectangleRoundedTopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_65382)">
<path d="M9 6H15C16.5913 6 18.1174 6.63214 19.2426 7.75736C20.3679 8.88258 21 10.4087 21 12V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V12C3 10.4087 3.63214 8.88258 4.75736 7.75736C5.88258 6.63214 7.4087 6 9 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_65382">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

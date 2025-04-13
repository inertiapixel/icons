import React from "react";

export const Mushroom1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67872)">
<path d="M20 11.1C20 6.626 16.418 3 12 3C7.582 3 4 6.626 4 11.1C4 11.3387 4.09482 11.5676 4.2636 11.7364C4.43239 11.9052 4.66131 12 4.9 12H19.1C19.3387 12 19.5676 11.9052 19.7364 11.7364C19.9052 11.5676 20 11.3387 20 11.1Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21C12.5304 21 13.0391 20.7893 13.4142 20.4142C13.7893 20.0391 14 19.5304 14 19V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67872">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

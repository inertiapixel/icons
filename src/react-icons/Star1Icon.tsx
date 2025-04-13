import React from "react";

export const Star1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62472)">
<path d="M12.0008 17.7519L5.82881 20.9969L7.00781 14.1239L2.00781 9.25691L8.90781 8.25691L11.9938 2.00391L15.0798 8.25691L21.9798 9.25691L16.9798 14.1239L18.1588 20.9969L12.0008 17.7519Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62472">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

import React from "react";

export const SeedingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64396)">
<path d="M12 10C12 8.4087 11.3679 6.88258 10.2426 5.75736C9.11742 4.63214 7.5913 4 6 4H3V6C3 7.5913 3.63214 9.11742 4.75736 10.2426C5.88258 11.3679 7.4087 12 9 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14C12 12.4087 12.6321 10.8826 13.7574 9.75736C14.8826 8.63214 16.4087 8 18 8H21V9C21 10.5913 20.3679 12.1174 19.2426 13.2426C18.1174 14.3679 16.5913 15 15 15H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64396">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

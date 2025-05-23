import React from "react";

export const PlantIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66227)">
<path d="M7 15H17V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19V15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9C12 7.4087 11.3679 5.88258 10.2426 4.75736C9.11742 3.63214 7.5913 3 6 3H3V5C3 6.5913 3.63214 8.11742 4.75736 9.24264C5.88258 10.3679 7.4087 11 9 11H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C12 9.4087 12.6321 7.88258 13.7574 6.75736C14.8826 5.63214 16.4087 5 18 5H21V6C21 7.5913 20.3679 9.11742 19.2426 10.2426C18.1174 11.3679 16.5913 12 15 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66227">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

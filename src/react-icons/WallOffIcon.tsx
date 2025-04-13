import React from "react";

export const WallOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60156)">
<path d="M8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V16M19.411 19.417C19.05 19.777 18.551 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.45 4.222 4.953 4.58 4.591"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 8H8M12 8H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12H16M12 12H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 4V5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60156">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

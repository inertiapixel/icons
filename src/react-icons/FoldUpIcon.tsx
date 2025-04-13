import React from "react";

export const FoldUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73341)">
<path d="M12 13V5M12 5L9 8M12 5L15 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 17H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17H5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73341">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

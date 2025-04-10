import React from "react";

export const GlassIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_72741)">
<path d="M8 21H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 5L18 11C18 14.012 15.314 16 12 16C8.686 16 6 14.012 6 11L7 5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5C7 5.53043 7.52678 6.03914 8.46447 6.41421C9.40215 6.78929 10.6739 7 12 7C13.3261 7 14.5979 6.78929 15.5355 6.41421C16.4732 6.03914 17 5.53043 17 5C17 4.46957 16.4732 3.96086 15.5355 3.58579C14.5979 3.21071 13.3261 3 12 3C10.6739 3 9.40215 3.21071 8.46447 3.58579C7.52678 3.96086 7 4.46957 7 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72741">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

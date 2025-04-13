import React from "react";

export const Hours24Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71546)">
<path d="M4 13C4.325 15.532 5.881 17.781 8 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 11.0007C19.7554 9.2409 18.9391 7.61034 17.6766 6.36018C16.4142 5.11001 14.7758 4.3096 13.0137 4.08224C11.2516 3.85487 9.46362 4.21316 7.9252 5.10193C6.38678 5.99069 5.18325 7.36062 4.5 9.00068"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 5V9H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15H14C14.2652 15 14.5196 15.1054 14.7071 15.2929C14.8946 15.4804 15 15.7348 15 16V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13C12.7348 18 12.4804 18.1054 12.2929 18.2929C12.1054 18.4804 12 18.7348 12 19V20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8946 12.7348 21 13 21H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15V17C18 17.2652 18.1054 17.5196 18.2929 17.7071C18.4804 17.8946 18.7348 18 19 18H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71546">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

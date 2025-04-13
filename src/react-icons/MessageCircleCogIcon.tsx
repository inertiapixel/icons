import React from "react";

export const MessageCircleCogIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68748)">
<path d="M11.996 19.9817C10.5084 19.983 9.03983 19.648 7.7 19.0017L3 20.0017L4.3 16.1017C1.976 12.6647 2.874 8.22968 6.4 5.72768C9.926 3.22668 14.99 3.43168 18.245 6.20768C20.087 7.77968 21.028 9.89868 21.015 12.0287"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19C21 18.4696 20.7893 17.9609 20.4142 17.5858C20.0391 17.2107 19.5304 17 19 17C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15.5V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V22.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0334 17.25L20.7344 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.2688 20L15.9688 20.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9688 17.25L17.2688 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.7344 20L22.0344 20.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68748">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

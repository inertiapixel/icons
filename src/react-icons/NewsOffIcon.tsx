import React from "react";

export const NewsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67546)">
<path d="M16 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V16M19.394 19.435C19.112 19.7091 18.7555 19.8939 18.3691 19.9665C17.9826 20.0391 17.5833 19.9961 17.2211 19.843C16.859 19.6898 16.55 19.4333 16.3328 19.1056C16.1156 18.7778 15.9998 18.3932 16 18V16M16 12V5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4H8M4.265 4.321C4.09439 4.50593 3.99977 4.74839 4 5V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16H12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67546">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

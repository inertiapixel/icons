import React from "react";

export const HttpConnectIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71532)">
<path d="M7 10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 16V8L21 16V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16C11.4696 16 10.9609 15.7893 10.5858 15.4142C10.2107 15.0391 10 14.5304 10 14V10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71532">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

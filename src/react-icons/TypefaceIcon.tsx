import React from "react";

export const TypefaceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60829)">
<path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17C16.4696 17 15.9609 16.7893 15.5858 16.4142C15.2107 16.0391 15 15.5304 15 15V7H10C9.46957 7 8.96086 7.21071 8.58579 7.58579C8.21071 7.96086 8 8.46957 8 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17C7.58226 16.9999 8.14975 16.8167 8.62211 16.4762C9.09447 16.1358 9.44777 15.6554 9.632 15.103L10 14C10.6578 12.0272 11.7657 10.2346 13.236 8.764L15 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60829">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

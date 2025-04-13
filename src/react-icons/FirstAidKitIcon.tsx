import React from "react";

export const FirstAidKitIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73646)">
<path d="M8 8V6C8 5.46957 8.21071 4.96086 8.58579 4.58579C8.96086 4.21071 9.46957 4 10 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73646">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

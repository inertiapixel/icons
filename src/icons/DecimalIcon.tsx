import React from "react";

export const DecimalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_76910)">
<path d="M17 8C17.5304 8 18.0391 8.21071 18.4142 8.58579C18.7893 8.96086 19 9.46957 19 10V14C19 14.5304 18.7893 15.0391 18.4142 15.4142C18.0391 15.7893 17.5304 16 17 16C16.4696 16 15.9609 15.7893 15.5858 15.4142C15.2107 15.0391 15 14.5304 15 14V10C15 9.46957 15.2107 8.96086 15.5858 8.58579C15.9609 8.21071 16.4696 8 17 8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10V14C12 14.5304 11.7893 15.0391 11.4142 15.4142C11.0391 15.7893 10.5304 16 10 16C9.46957 16 8.96086 15.7893 8.58579 15.4142C8.21071 15.0391 8 14.5304 8 14V10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 16H5.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76910">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

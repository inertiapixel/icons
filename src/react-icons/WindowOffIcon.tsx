import React from "react";

export const WindowOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59798)">
<path d="M6.166 6.19C5.41129 7.31779 5.00573 8.643 5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V19M19 15V10C19 6.272 15.866 3 12 3C10.6455 3.00198 9.32187 3.40491 8.196 4.158"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13H13M17 13H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V8M12 12V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59798">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

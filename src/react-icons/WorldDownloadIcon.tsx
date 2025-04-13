import React from "react";

export const WorldDownloadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59687)">
<path d="M21 12C21 10.22 20.4722 8.47991 19.4832 6.99987C18.4943 5.51983 17.0887 4.36628 15.4442 3.68509C13.7996 3.0039 11.99 2.82567 10.2442 3.17294C8.49836 3.5202 6.89472 4.37737 5.63604 5.63604C4.37737 6.89472 3.5202 8.49836 3.17294 10.2442C2.82567 11.99 3.0039 13.7996 3.68509 15.4442C4.36628 17.0887 5.51983 18.4943 6.99987 19.4832C8.47991 20.4722 10.22 21 12 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H12.0016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5778 3C9.89314 5.69961 9 8.81787 9 12C9 15.1821 9.89314 18.3004 11.5778 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.219 5.755 15 8.876 15 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 14V21M18 21L15 18M18 21L21 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59687">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

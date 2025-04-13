import React from "react";

export const DownloadOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75161)">
<path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.3875 21.0003 18.7668 20.8879 19.0917 20.6767C19.4165 20.4654 19.6731 20.1643 19.83 19.81"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 11L12 16L14 14M16 12L17 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V8M12 12V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75161">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

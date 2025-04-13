import React from "react";

export const DeviceMobileOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76080)">
<path d="M7.159 3.185C7.415 3.066 7.699 3 8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V14M18 18V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76080">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

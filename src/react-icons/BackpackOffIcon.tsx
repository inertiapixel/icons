import React from "react";

export const BackpackOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84552)">
<path d="M10 6H13C14.5913 6 16.1174 6.63214 17.2426 7.75736C18.3679 8.88258 19 10.4087 19 12V15M18.871 18.872C18.684 19.4877 18.3039 20.027 17.7869 20.4101C17.27 20.7933 16.6435 21.0001 16 21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7956 5 18V12C4.9992 11.0928 5.20446 10.1973 5.60029 9.38106C5.99612 8.5648 6.57218 7.84911 7.285 7.288"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6V5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84552">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

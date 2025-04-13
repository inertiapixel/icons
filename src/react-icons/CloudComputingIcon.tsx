import React from "react";

export const CloudComputingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78361)">
<path d="M6.657 15.9999C4.085 15.9999 2 13.9929 2 11.5169C2 9.04188 4.085 7.03488 6.657 7.03488C7.05 5.27288 8.451 3.83488 10.332 3.26188C12.212 2.68988 14.288 3.06888 15.776 4.26188C17.264 5.45188 17.938 7.26888 17.546 9.03088H18.536C20.449 9.03088 22 10.5909 22 12.5169C22 14.4439 20.449 16.0039 18.535 16.0039H6.657"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16V20C16 20.2652 16.1054 20.5196 16.2929 20.7071C16.4804 20.8946 16.7348 21 17 21H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16V20C8 20.2652 7.89464 20.5196 7.70711 20.7071C7.51957 20.8946 7.26522 21 7 21H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78361">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

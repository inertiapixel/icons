import React from "react";

export const CloudNetworkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78305)">
<path d="M3 20H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20C10 20.5304 10.2107 21.0391 10.5858 21.4142C10.9609 21.7893 11.4696 22 12 22C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20C14 19.4696 13.7893 18.9609 13.4142 18.5858C13.0391 18.2107 12.5304 18 12 18C11.4696 18 10.9609 18.2107 10.5858 18.5858C10.2107 18.9609 10 19.4696 10 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16.0039H6.657C4.085 15.9999 2 13.9929 2 11.5169C2 9.04188 4.085 7.03488 6.657 7.03488C7.05 5.27288 8.451 3.83488 10.332 3.26188C12.212 2.68988 14.288 3.06888 15.776 4.26188C17.264 5.45188 17.938 7.26888 17.546 9.03088H18.536C20.449 9.03088 22 10.5909 22 12.5169C22 14.4439 20.449 16.0039 18.535 16.0039H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78305">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

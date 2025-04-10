import React from "react";

export const CloudPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78286)">
<path d="M12 18.0039H6.657C4.085 17.9999 2 15.9929 2 13.5169C2 11.0419 4.085 9.03488 6.657 9.03488C7.05 7.27288 8.451 5.83488 10.332 5.26188C12.212 4.68988 14.288 5.06888 15.776 6.26188C17.264 7.45188 17.938 9.26888 17.546 11.0309H18.536C19.1756 11.0315 19.8025 11.2094 20.3471 11.5448C20.8917 11.8802 21.3326 12.36 21.621 12.9309" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78286">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

import React from "react";

export const CloudFogIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78330)">
<path d="M7.00142 15.9992C5.7537 15.9992 4.55708 15.5251 3.6748 14.6812C2.79253 13.8373 2.29687 12.6927 2.29688 11.4992C2.29687 10.3058 2.79253 9.16117 3.6748 8.31726C4.55708 7.47335 5.7537 6.99924 7.00142 6.99924C7.29611 5.68642 8.15818 4.53272 9.39801 3.79195C10.6378 3.05118 12.1538 2.78402 13.6125 3.04924C15.0712 3.31446 16.3531 4.09033 17.1762 5.20617C17.9993 6.32201 18.2961 7.68642 18.0014 8.99924H19.0014C19.9297 8.99924 20.8199 9.36799 21.4763 10.0244C22.1327 10.6807 22.5014 11.571 22.5014 12.4992C22.5014 13.4275 22.1327 14.3177 21.4763 14.9741C20.8199 15.6305 19.9297 15.9992 19.0014 15.9992H7.00142Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 20H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78330">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

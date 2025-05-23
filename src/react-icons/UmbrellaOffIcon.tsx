import React from "react";

export const UmbrellaOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60781)">
<path d="M12 11.9986H4C4 9.78962 4.895 7.79061 6.342 6.34261M8.724 4.69761C9.94247 4.15069 11.2785 3.91753 12.6102 4.0194C13.9419 4.12127 15.2269 4.55493 16.348 5.28083C17.4691 6.00673 18.3906 7.00176 19.0285 8.17517C19.6665 9.34858 20.0004 10.663 20 11.9986H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60781">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

import React from "react";

export const PentagonPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66766)">
<path d="M12.4999 21.0041H7.04186C6.62415 21.004 6.21719 20.8717 5.87928 20.6262C5.54138 20.3806 5.28989 20.0344 5.16086 19.6371L2.09686 10.2071C1.96771 9.8097 1.96771 9.38162 2.09688 8.98424C2.22605 8.58686 2.47774 8.24059 2.81586 7.99509L10.8369 2.16709C11.1749 1.9214 11.582 1.78906 11.9999 1.78906C12.4177 1.78906 12.8249 1.9214 13.1629 2.16709L21.1839 7.99509C21.8779 8.49909 22.1679 9.39209 21.9029 10.2071L21.1229 12.6081"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66766">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

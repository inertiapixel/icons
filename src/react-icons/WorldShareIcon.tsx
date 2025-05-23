import React from "react";

export const WorldShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59580)">
<path d="M20.9391 13.045C21.1509 11.2333 20.8072 9.39995 19.9535 7.78798C19.0999 6.176 17.7765 4.86147 16.1589 4.01857C14.5413 3.17566 12.7057 2.84418 10.8954 3.06805C9.08517 3.29191 7.38565 4.06055 6.02208 5.27212C4.65851 6.48369 3.69527 8.08099 3.26 9.85236C2.82473 11.6237 2.93797 13.4855 3.58472 15.1911C4.23147 16.8967 5.3812 18.3654 6.88156 19.4028C8.38191 20.4402 10.1621 20.9972 11.9861 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 9H20.4016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.60156 15H13.0016"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4997 3C9.81501 5.69961 8.92188 8.81787 8.92188 12C8.92188 15.1821 9.81501 18.3004 11.4997 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3C14.4192 6.07385 15.3053 9.68077 15.029 13.294"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59580">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

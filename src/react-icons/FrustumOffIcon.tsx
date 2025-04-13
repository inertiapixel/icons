import React from "react";

export const FrustumOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73094)">
<path d="M7.7203 3.72742L11.2043 2.16942C11.4545 2.05773 11.7253 2 11.9993 2C12.2733 2 12.5441 2.05773 12.7943 2.16942L17.2903 4.17942C17.8443 4.42542 18.2533 4.91542 18.4023 5.50742L20.9403 15.6654C21.0433 16.0774 21.0103 16.4974 20.8653 16.8714M18.5663 18.5704L12.8413 21.3084C12.5788 21.4343 12.2914 21.4996 12.0003 21.4996C11.7092 21.4996 11.4218 21.4343 11.1593 21.3084L4.1243 17.9434C3.71188 17.7442 3.38082 17.4087 3.18698 16.9937C2.99314 16.5787 2.9484 16.1096 3.0603 15.6654L5.5803 5.58542"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9992 4.82031L12.8012 7.14431C12.5492 7.25695 12.2763 7.31517 12.0002 7.31517C11.7242 7.31517 11.4512 7.25695 11.1992 7.14431"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.32031V8.00031M12 12.0003V21.5003"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73094">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

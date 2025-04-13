import React from "react";

export const CurrencyCentIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77424)">
<path d="M16.0078 7.54001C14.9093 6.54696 13.4807 5.99804 11.9998 6.00001C10.4099 6.00213 8.88583 6.6352 7.76234 7.76019C6.63885 8.88518 6.00781 10.4101 6.00781 12C6.00781 15.314 8.68981 18 11.9998 18C13.4774 18.0011 14.9027 17.4537 15.9998 16.464"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77424">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

import React from "react";

export const BrandNuxtIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81831)">
<path d="M12.1477 8.58292L10.8477 6.49292C10.7528 6.34069 10.6205 6.2154 10.4632 6.12909C10.306 6.04278 10.1292 5.99834 9.9499 6.00005C9.77056 6.00175 9.59466 6.04955 9.43912 6.13884C9.28357 6.22813 9.15359 6.35591 9.06168 6.50992L3.15168 16.4179C3.05699 16.5766 3.00602 16.7575 3.00397 16.9423C3.00192 17.1271 3.04885 17.3091 3.13999 17.4698C3.23114 17.6306 3.36324 17.7643 3.52285 17.8574C3.68246 17.9505 3.86389 17.9997 4.04867 17.9999H7.96168"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0427 18.0009C20.7857 18.0009 21.2437 17.1579 20.8627 16.4959L16.8187 9.48286C16.7377 9.33656 16.6191 9.21462 16.4751 9.1297C16.331 9.04479 16.1669 9 15.9997 9C15.8325 9 15.6683 9.04479 15.5243 9.1297C15.3803 9.21462 15.2616 9.33656 15.1807 9.48286L11.1377 16.4959C10.7557 17.1579 11.2137 18.0009 11.9567 18.0009H20.0427Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81831">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

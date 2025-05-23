import React from "react";

export const HeartDiscountIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72274)">
<path d="M13.0013 18.9997L12.0013 19.9997L4.50128 12.5717C4.00658 12.0903 3.61692 11.5117 3.35683 10.8723C3.09673 10.2329 2.97184 9.54664 2.99002 8.85662C3.00819 8.1666 3.16904 7.48782 3.46244 6.86303C3.75583 6.23823 4.17541 5.68094 4.69476 5.22627C5.21411 4.77159 5.82198 4.42938 6.48009 4.22117C7.1382 4.01296 7.83228 3.94327 8.51865 4.01649C9.20501 4.08971 9.86878 4.30425 10.4682 4.64659C11.0675 4.98894 11.5895 5.45169 12.0013 6.00569C12.4148 5.45571 12.9374 4.99701 13.5364 4.65829C14.1353 4.31958 14.7978 4.10814 15.4822 4.03721C16.1666 3.96628 16.8584 4.03739 17.5141 4.24608C18.1697 4.45477 18.7753 4.79656 19.2928 5.25005C19.8104 5.70354 20.2287 6.25897 20.5217 6.88158C20.8147 7.50419 20.976 8.18057 20.9956 8.8684C21.0152 9.55622 20.8925 10.2407 20.6354 10.8789C20.3783 11.5172 19.9922 12.0955 19.5013 12.5777"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21L21 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21V21.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16V16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72274">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

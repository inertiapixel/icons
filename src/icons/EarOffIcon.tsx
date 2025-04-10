import React from "react";

export const EarOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_74975)">
<path d="M6 10.0015C6 8.85552 6.277 7.75652 6.78 6.78252M8.572 4.57452C9.84858 3.5319 11.4521 2.9732 13.1002 2.99681C14.7483 3.02043 16.3352 3.62485 17.5814 4.70361C18.8276 5.78237 19.6531 7.26628 19.9126 8.89397C20.1721 10.5217 19.8489 12.1887 19 13.6015C18.8017 13.8658 18.5905 14.1201 18.367 14.3635M16.322 16.3235C15.7585 17.0046 15.3118 17.7744 15 18.6015C14.6897 19.1879 14.2535 19.6985 13.7228 20.0966C13.192 20.4947 12.5798 20.7705 11.93 20.9043C11.2802 21.0381 10.6088 21.0266 9.96393 20.8705C9.31908 20.7144 8.71673 20.4177 8.2 20.0015" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4219 7.41529C11.9968 7.05875 12.6754 6.907 13.3475 6.9847C14.0195 7.06239 14.6456 7.36495 15.124 7.84327C15.6024 8.32159 15.9051 8.94758 15.983 9.61961C16.0609 10.2916 15.9093 10.9703 15.5529 11.5453" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74975">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

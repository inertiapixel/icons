import React from "react";

export const CurrencyNairaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77243)">
<path d="M7 18V7.052C6.99993 6.81932 7.07715 6.59322 7.21952 6.40919C7.36189 6.22515 7.56136 6.09363 7.7866 6.03526C8.01183 5.97689 8.25008 5.99499 8.46391 6.08671C8.67774 6.17843 8.85506 6.33858 8.968 6.542L15.032 17.458C15.1449 17.6614 15.3223 17.8216 15.5361 17.9133C15.7499 18.005 15.9882 18.0231 16.2134 17.9647C16.4386 17.9064 16.6381 17.7748 16.7805 17.5908C16.9229 17.4068 17.0001 17.1807 17 16.948V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 10H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 14H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77243">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

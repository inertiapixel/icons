import React from "react";

export const SpiralIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63220)">
<path d="M9.99986 12.0569C10.1373 12.3532 10.3487 12.6091 10.6139 12.7999C11.6739 13.5129 13.0859 12.9119 13.6569 11.8809C14.4959 10.3679 13.6349 8.51291 12.1319 7.80091C10.1319 6.85091 7.76086 7.95491 6.89186 9.88691C5.79686 12.3189 7.18186 15.1349 9.60186 16.1329C12.5329 17.3409 15.8849 15.7149 17.0399 12.8779C18.3999 9.53491 16.4829 5.74391 13.1439 4.46791C9.28886 2.99391 4.94386 5.14791 3.50786 8.88991C1.87786 13.1429 4.33086 17.9139 8.58986 19.4659C13.3679 21.2059 18.7079 18.5249 20.4229 13.8759C20.7588 12.9735 20.9535 12.0247 20.9999 11.0629"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63220">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

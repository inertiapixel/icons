import React from "react";

export const SphereOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63247)">
<path d="M3 12C3 13.657 7.03 15 12 15C12.987 15 13.936 14.947 14.825 14.85M18.182 14.18C19.917 13.633 21 12.86 21 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0492 16.0268C20.8959 14.3365 21.1888 12.4224 20.8863 10.5562C20.5838 8.68999 19.7013 6.96642 18.3641 5.63003C17.0268 4.29365 15.3026 3.41232 13.4362 3.11108C11.5698 2.80985 9.65595 3.10401 7.96615 3.95184M5.62615 5.64384C3.93991 7.33327 2.99385 9.62336 2.9961 12.0103C2.99835 14.3973 3.94872 16.6856 5.63815 18.3718C7.32758 20.0581 9.61767 21.0041 12.0046 21.0019C14.3916 20.9996 16.6799 20.0493 18.3662 18.3598"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63247">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

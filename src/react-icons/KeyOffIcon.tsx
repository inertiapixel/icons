import React from "react";

export const KeyOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71150)">
<path d="M10.1719 6.15881L12.4879 3.84281C12.755 3.57561 13.0722 3.36365 13.4213 3.21904C13.7704 3.07443 14.1445 3 14.5224 3C14.9002 3 15.2744 3.07443 15.6235 3.21904C15.9725 3.36365 16.2897 3.57561 16.5569 3.84281L20.1589 7.44481C20.4261 7.71197 20.638 8.02914 20.7826 8.37823C20.9273 8.72731 21.0017 9.10146 21.0017 9.47931C21.0017 9.85716 20.9273 10.2313 20.7826 10.5804C20.638 10.9295 20.4261 11.2466 20.1589 11.5138L17.8289 13.8438"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.931 14.9478C14.3677 14.8393 13.85 14.564 13.445 14.1578L13.144 13.8558L6.586 20.4138C6.25372 20.746 5.81507 20.9506 5.347 20.9918L5.172 20.9998H4C3.75507 20.9997 3.51866 20.9098 3.33563 20.7471C3.15259 20.5843 3.03566 20.36 3.007 20.1168L3 19.9998V18.8278C3.00011 18.3582 3.16543 17.9037 3.467 17.5438L3.586 17.4138L4 16.9998H6V14.9998H8V12.9998L10.144 10.8558L9.843 10.5548C9.4321 10.1454 9.15521 9.62097 9.049 9.05078"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71150">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

import React from "react";

export const ViewfinderOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60319)">
<path d="M5.64928 5.62393C4.80139 6.45602 4.12663 7.44775 3.66391 8.5419C3.20118 9.63605 2.95966 10.811 2.95326 11.999C2.94685 13.1869 3.17571 14.3644 3.62661 15.4635C4.07751 16.5625 4.74155 17.5615 5.58042 18.4026C6.41929 19.2438 7.41639 19.9106 8.51423 20.3645C9.61206 20.8185 10.7889 21.0505 11.9769 21.0474C13.1648 21.0443 14.3404 20.806 15.4359 20.3463C16.5313 19.8866 17.5249 19.2145 18.3593 18.3689M20.0433 16.0409C20.8943 14.3493 21.1901 12.4324 20.8886 10.5629C20.587 8.69341 19.7035 6.96669 18.3637 5.62846C17.0239 4.29023 15.2962 3.40869 13.4263 3.1093C11.5565 2.80991 9.63991 3.10793 7.94928 3.96093"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12H18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60319">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

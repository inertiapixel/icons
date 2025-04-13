import React from "react";

export const ClockEditIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78565)">
<path d="M21 11.9994C20.9999 10.2608 20.4962 8.5595 19.5499 7.10108C18.6035 5.64265 17.255 4.48953 15.6674 3.7811C14.0797 3.07266 12.3208 2.83924 10.6033 3.10904C8.88584 3.37883 7.28325 4.14031 5.98927 5.30141C4.69529 6.46252 3.7653 7.97356 3.31171 9.6519C2.85812 11.3302 2.90035 13.104 3.43329 14.7589C3.96623 16.4137 4.96707 17.8788 6.31484 18.977C7.66261 20.0753 9.29962 20.7596 11.028 20.9474C11.348 20.9814 11.672 20.9994 12 20.9994"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.42 15.6112C18.615 15.4162 18.8465 15.2615 19.1013 15.156C19.3561 15.0504 19.6292 14.9961 19.905 14.9961C20.1808 14.9961 20.4539 15.0504 20.7087 15.156C20.9635 15.2615 21.195 15.4162 21.39 15.6112C21.585 15.8062 21.7397 16.0377 21.8452 16.2925C21.9508 16.5473 22.0051 16.8204 22.0051 17.0962C22.0051 17.372 21.9508 17.6451 21.8452 17.8999C21.7397 18.1547 21.585 18.3862 21.39 18.5812L18 22.0012H15V19.0012L18.42 15.6112Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78565">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

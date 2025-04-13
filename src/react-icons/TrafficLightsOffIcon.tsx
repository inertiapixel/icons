import React from "react";

export const TrafficLightsOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61194)">
<path d="M8 4C8.912 2.781 10.36 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V13M17 17C17 18.3261 16.4732 19.5979 15.5355 20.5355C14.5979 21.4732 13.3261 22 12 22C10.6739 22 9.40215 21.4732 8.46447 20.5355C7.52678 19.5979 7 18.3261 7 17V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8C12.1978 8 12.3911 7.94135 12.5556 7.83147C12.72 7.72159 12.8482 7.56541 12.9239 7.38268C12.9996 7.19996 13.0194 6.99889 12.9808 6.80491C12.9422 6.61093 12.847 6.43275 12.7071 6.29289C12.5673 6.15304 12.3891 6.0578 12.1951 6.01922C12.0011 5.98063 11.8 6.00043 11.6173 6.07612C11.4346 6.15181 11.2784 6.27998 11.1685 6.44443C11.0586 6.60888 11 6.80222 11 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.2906 11.2969C11.1089 11.486 11.0088 11.7389 11.0118 12.0011C11.0148 12.2633 11.1207 12.5139 11.3066 12.6988C11.4926 12.8837 11.7437 12.9882 12.006 12.9897C12.2682 12.9912 12.5206 12.8896 12.7086 12.7069"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16C11.7348 16 11.4804 16.1054 11.2929 16.2929C11.1054 16.4804 11 16.7348 11 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61194">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

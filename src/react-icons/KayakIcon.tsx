import React from "react";

export const KayakIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71161)">
<path d="M6.41388 6.41388C6.78882 6.03882 6.99945 5.5302 6.99945 4.99988C6.99945 4.46955 6.78882 3.96093 6.41388 3.58588L4.99988 2.17188L2.17188 4.99988L3.58588 6.41388C3.96093 6.78882 4.46955 6.99945 4.99988 6.99945C5.5302 6.99945 6.03882 6.78882 6.41388 6.41388Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5856 17.5856C17.2106 17.9606 17 18.4692 17 18.9996C17 19.5299 17.2106 20.0385 17.5856 20.4136L18.9996 21.8276L21.8276 18.9996L20.4136 17.5856C20.0385 17.2106 19.5299 17 18.9996 17C18.4692 17 17.9606 17.2106 17.5856 17.5856Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 6.5L17.5 17.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2.5C12.017 5.101 4.373 10.452 2 22C11.983 19.399 19.627 14.048 22 2.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 12.5L11.5 17.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 6.5L17.5 11.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71161">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

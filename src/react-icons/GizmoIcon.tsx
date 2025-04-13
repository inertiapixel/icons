import React from "react";

export const GizmoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72778)">
<path d="M20 19L12 13.5L4 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 4V13.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20C4.26522 20 4.51957 19.8946 4.70711 19.7071C4.89464 19.5196 5 19.2652 5 19C5 18.7348 4.89464 18.4804 4.70711 18.2929C4.51957 18.1054 4.26522 18 4 18C3.73478 18 3.48043 18.1054 3.29289 18.2929C3.10536 18.4804 3 18.7348 3 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 19C19 19.2652 19.1054 19.5196 19.2929 19.7071C19.4804 19.8946 19.7348 20 20 20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19C21 18.7348 20.8946 18.4804 20.7071 18.2929C20.5196 18.1054 20.2652 18 20 18C19.7348 18 19.4804 18.1054 19.2929 18.2929C19.1054 18.4804 19 18.7348 19 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72778">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

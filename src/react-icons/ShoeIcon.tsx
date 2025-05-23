import React from "react";

export const ShoeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63925)">
<path d="M4 6H9.426C9.60063 6.00012 9.77219 6.04598 9.9236 6.133C10.075 6.22002 10.201 6.34517 10.289 6.496L11.353 8.319C11.5574 8.66957 11.8309 8.97502 12.1568 9.21686C12.4827 9.4587 12.8542 9.63191 13.249 9.726L17.926 10.84C18.8012 11.0483 19.5806 11.5455 20.1384 12.2513C20.6961 12.9571 20.9997 13.8304 21 14.73V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17V7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13L15 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18V17C8 15.9391 7.57857 14.9217 6.82843 14.1716C6.07828 13.4214 5.06087 13 4 13H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12L11.5 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63925">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

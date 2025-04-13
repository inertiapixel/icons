import React from "react";

export const AbcIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86558)">
<path d="M3 16V10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8V14M10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13V14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.732 11.9999C20.5119 11.6187 20.1721 11.3207 19.7653 11.1522C19.3586 10.9838 18.9076 10.9542 18.4824 11.0682C18.0571 11.1821 17.6813 11.4332 17.4133 11.7824C17.1453 12.1317 17 12.5597 17 12.9999V13.9999C17.0001 14.4391 17.1447 14.8661 17.4116 15.2149C17.6785 15.5637 18.0528 15.8149 18.4767 15.9298C18.9007 16.0448 19.3506 16.0169 19.7571 15.8507C20.1636 15.6844 20.5041 15.3889 20.726 15.0099"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86558">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

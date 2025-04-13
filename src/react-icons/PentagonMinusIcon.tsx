import React from "react";

export const PentagonMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66816)">
<path d="M12.4995 20.9986C11.2862 20.9986 9.46685 21.0003 7.04151 21.0036C6.62388 21.0033 6.21705 20.8708 5.87921 20.6253C5.54137 20.3798 5.28981 20.0337 5.16051 19.6366L2.09651 10.2066C1.96767 9.80921 1.96783 9.38123 2.09698 8.98391C2.22612 8.5866 2.47763 8.24032 2.81551 7.99462L10.8365 2.16662C11.1746 1.92122 11.5817 1.78906 11.9995 1.78906C12.4173 1.78906 12.8244 1.92122 13.1625 2.16662L21.1835 7.99462C21.8775 8.49862 22.1675 9.39162 21.9025 10.2066L20.3435 14.9986"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66816">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

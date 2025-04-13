import React from "react";

export const BrandEdgeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82369)">
<path d="M20.978 11.3711C20.8296 9.25273 19.9369 7.25505 18.4578 5.73132C16.9787 4.20758 15.0084 3.25594 12.8954 3.04467C10.7824 2.8334 8.66267 3.37611 6.91115 4.57684C5.15964 5.77757 3.88911 7.55896 3.32425 9.60603C2.75938 11.6531 2.93655 13.834 3.82444 15.763C4.71233 17.6921 6.25374 19.245 8.17611 20.1473C10.0985 21.0495 12.278 21.243 14.3292 20.6934C16.3804 20.1438 18.1712 18.8866 19.385 17.1441"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9788 11.3712C21.1888 14.3642 15.9448 13.7842 14.0658 12.8572C15.4578 11.2572 14.4678 8.81925 11.7918 9.00625C10.0468 9.12825 8.86479 10.1632 9.00779 12.2082C9.28779 16.1982 13.4518 18.4132 19.3678 16.9982"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.02215 12.6293C2.73915 8.58633 11.7392 5.40133 14.2702 9.94133"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6295 20.9785C9.6365 21.1885 7.4675 16.2535 9.0625 11.2305"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82369">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

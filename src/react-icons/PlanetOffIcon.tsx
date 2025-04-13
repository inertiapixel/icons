import React from "react";

export const PlanetOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66259)">
<path d="M18.8153 13.5792C20.7713 15.4042 21.9723 17.0282 21.9993 18.0242M18.5713 18.6172C16.4733 17.9832 13.6273 16.5872 10.6523 14.6412C5.18233 11.0622 1.34833 6.9772 2.09233 5.5182C2.41233 4.8902 3.68333 4.9182 5.38633 5.4052"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.04363 7.05789C5.75366 8.37621 5.03614 10.1504 5.047 11.9948C5.05786 13.8392 5.79623 15.6048 7.10163 16.9078C8.40703 18.2108 10.174 18.946 12.0184 18.9535C13.8628 18.961 15.6357 18.2403 16.9516 16.9479M18.5326 14.5229C19.0224 13.2576 19.1339 11.8772 18.8535 10.5497C18.5732 9.22219 17.9131 8.00477 16.9535 7.04553C15.994 6.08629 14.7763 5.42659 13.4487 5.14668C12.1211 4.86677 10.7408 4.97871 9.47563 5.46889"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66259">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

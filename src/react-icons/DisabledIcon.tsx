import React from "react";

export const DisabledIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75302)">
<path d="M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7C11.5304 7 12.0391 6.78929 12.4142 6.41421C12.7893 6.03914 13 5.53043 13 5C13 4.46957 12.7893 3.96086 12.4142 3.58579C12.0391 3.21071 11.5304 3 11 3C10.4696 3 9.96086 3.21071 9.58579 3.58579C9.21071 3.96086 9 4.46957 9 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7V15H15L19 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00099 11.5C6.28448 11.7967 5.64682 12.2561 5.13841 12.8417C4.63 13.4273 4.26478 14.1231 4.07163 14.8742C3.87847 15.6253 3.86268 16.411 4.02549 17.1692C4.1883 17.9275 4.52526 18.6374 5.00972 19.243C5.49418 19.8486 6.11287 20.3332 6.81687 20.6585C7.52087 20.9837 8.29088 21.1408 9.06604 21.1172C9.8412 21.0937 10.6003 20.8901 11.2832 20.5226C11.9661 20.1552 12.5542 19.6339 13.001 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75302">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);

import React from "react";

export const ShoppingCartCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63857)">
<path d="M4 19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19C8 18.4696 7.78929 17.9609 7.41421 17.5858C7.03914 17.2107 6.53043 17 6 17C5.46957 17 4.96086 17.2107 4.58579 17.5858C4.21071 17.9609 4 18.4696 4 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17H6V3H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 5L20 6L19.143 11.998M15.5 13H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63857">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

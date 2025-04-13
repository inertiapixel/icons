import React from "react";

export const ShoppingCartOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63778)">
<path d="M4 19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19C8 18.4696 7.78929 17.9609 7.41421 17.5858C7.03914 17.2107 6.53043 17 6 17C5.46957 17 4.96086 17.2107 4.58579 17.5858C4.21071 17.9609 4 18.4696 4 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17C16.6044 17 16.2178 17.1173 15.8889 17.3371C15.56 17.5568 15.3036 17.8692 15.1522 18.2346C15.0009 18.6001 14.9613 19.0022 15.0384 19.3902C15.1156 19.7781 15.3061 20.1345 15.5858 20.4142C15.8655 20.6939 16.2219 20.8844 16.6098 20.9616C16.9978 21.0387 17.3999 20.9991 17.7654 20.8478C18.1308 20.6964 18.4432 20.44 18.6629 20.1111C18.8827 19.7822 19 19.3956 19 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17H6V6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.239 5.23047L20 5.99947L19 12.9995H17M13 12.9995H6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63778">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

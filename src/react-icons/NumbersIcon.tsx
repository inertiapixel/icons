import React from "react";

export const NumbersIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67300)">
<path d="M8 10V3L6 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16C6 15.4696 6.21071 14.9609 6.58579 14.5858C6.96086 14.2107 7.46957 14 8 14C8.53043 14 9.03914 14.2107 9.41421 14.5858C9.78929 14.9609 10 15.4696 10 16C10 16.591 9.399 17.46 9 18L6 21H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14C15 14.3956 15.1173 14.7822 15.3371 15.1111C15.5568 15.44 15.8692 15.6964 16.2346 15.8478C16.6001 15.9991 17.0022 16.0387 17.3902 15.9616C17.7781 15.8844 18.1345 15.6939 18.4142 15.4142C18.6939 15.1345 18.8844 14.7781 18.9616 14.3902C19.0387 14.0022 18.9991 13.6001 18.8478 13.2346C18.6964 12.8692 18.44 12.5568 18.1111 12.3371C17.7822 12.1173 17.3956 12 17 12C17.3956 12 17.7822 11.8827 18.1111 11.6629C18.44 11.4432 18.6964 11.1308 18.8478 10.7654C18.9991 10.3999 19.0387 9.99778 18.9616 9.60982C18.8844 9.22186 18.6939 8.86549 18.4142 8.58579C18.1345 8.30608 17.7781 8.1156 17.3902 8.03843C17.0022 7.96126 16.6001 8.00087 16.2346 8.15224C15.8692 8.30362 15.5568 8.55996 15.3371 8.88886C15.1173 9.21776 15 9.60444 15 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10H9.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67300">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

import React from "react";

export const HeartQuestionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72225)">
<path d="M14.1063 17.9147L12.0013 19.9997L4.50128 12.5717C4.00658 12.0903 3.61692 11.5117 3.35683 10.8723C3.09673 10.2329 2.97184 9.54664 2.99002 8.85662C3.00819 8.1666 3.16904 7.48782 3.46244 6.86303C3.75583 6.23823 4.17541 5.68094 4.69476 5.22627C5.21411 4.77159 5.82198 4.42938 6.48009 4.22117C7.1382 4.01296 7.83228 3.94327 8.51865 4.01649C9.20501 4.08971 9.86878 4.30425 10.4682 4.64659C11.0675 4.98894 11.5895 5.45169 12.0013 6.00569C12.7445 5.01664 13.828 4.33825 15.0423 4.10164C16.2566 3.86503 17.5155 4.08701 18.5757 4.72467C19.6358 5.36234 20.4219 6.3704 20.782 7.55398C21.1421 8.73757 21.0507 10.0126 20.5253 11.1327"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.9998C19.4483 18.9983 19.8832 18.8466 20.235 18.5687C20.5868 18.2909 20.8352 17.903 20.9406 17.4673C21.0459 17.0315 21.0019 16.5731 20.8158 16.1652C20.6297 15.7574 20.3122 15.4238 19.914 15.2178C19.5162 15.014 19.0611 14.9508 18.6228 15.0385C18.1845 15.1262 17.7888 15.3596 17.5 15.7008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72225">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

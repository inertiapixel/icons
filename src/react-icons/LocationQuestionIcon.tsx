import React from "react";

export const LocationQuestionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70165)">
<path d="M14.5006 21C14.4567 21.0957 14.3862 21.1769 14.2976 21.2338C14.209 21.2906 14.1059 21.3209 14.0006 21.3209C13.8952 21.3209 13.7921 21.2906 13.7035 21.2338C13.6149 21.1769 13.5444 21.0957 13.5006 21L10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L21.0006 3L18.0336 11.215"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.9998C19.4483 18.9983 19.8832 18.8466 20.235 18.5687C20.5868 18.2909 20.8352 17.903 20.9406 17.4673C21.0459 17.0315 21.0019 16.5731 20.8158 16.1652C20.6297 15.7574 20.3122 15.4238 19.914 15.2178C19.5162 15.014 19.0611 14.9508 18.6228 15.0385C18.1845 15.1262 17.7888 15.3596 17.5 15.7008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70165">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);

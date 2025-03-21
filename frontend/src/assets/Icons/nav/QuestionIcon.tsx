const QuestionIcon = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_263_1066)">
        <g filter="url(#filter3_dddddd_263_1066)" data-figma-bg-blur-radius="3.2">
          <circle cx="15.5" cy="15.5" r="12.5" fill="white" />
          <circle
            className="transition-all"
            cx="15.5"
            cy="15.5"
            r="12.5"
            fill={isActive ? 'url(#paint9_radial_263_1066)' : 'white'}
          />
          <circle
            className="transition-all"
            cx="15.5"
            cy="15.5"
            r="12.5"
            fill={isActive ? 'url(#paint10_radial_263_1066)' : 'white'}
          />
          <circle cx="15.5" cy="15.5" r="12.5" fill="url(#paint11_radial_263_1066)" />
        </g>
        <path
          d="M14.9534 17.6615C14.9534 15.7709 15.4378 15.1927 16.3284 14.6302C17.0159 14.1927 17.5472 13.7552 17.5472 13.0677C17.5472 12.3802 17.0003 11.9427 16.3284 11.9427C15.6722 11.9427 15.0628 12.4115 15.0472 13.1927C15.0315 13.974 12.5315 15.4896 12.5628 13.1927C12.594 10.8959 14.2972 9.86462 16.344 9.86462C18.6097 9.86462 20.2503 10.9584 20.2503 12.9427C20.2503 14.2552 19.5472 15.0677 18.5003 15.6927C17.6565 16.1927 17.2503 16.6615 17.2503 17.6615C17.2503 17.6615 17.2584 17.7952 17.2503 17.8802C17.1652 18.7732 15.0385 18.7732 14.9534 17.8802C14.9453 17.7952 14.9534 17.6615 14.9534 17.6615ZM16.1409 22.823C15.3597 22.823 14.719 22.198 14.7347 21.4011C14.719 20.6355 15.3597 20.0105 16.1409 20.0105C16.8909 20.0105 17.5472 20.6355 17.5628 21.4011C17.5472 22.198 16.8909 22.823 16.1409 22.823Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dddddd_263_1066"
          x="0.85111"
          y="0.441885"
          width="32.0128"
          height="31.7648"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0256" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_1066" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0512" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_263_1066"
            result="effect2_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.1792" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_263_1066"
            result="effect3_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.3584" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_263_1066"
            result="effect4_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.6144" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow_263_1066"
            result="effect5_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.0752" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect5_dropShadow_263_1066"
            result="effect6_dropShadow_263_1066"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect6_dropShadow_263_1066"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dddddd_263_1066"
          x="-0.1504"
          y="0.8496"
          width="31.3008"
          height="30.3008"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0256" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_1066" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0512" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_263_1066"
            result="effect2_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.1792" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_263_1066"
            result="effect3_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.3584" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_263_1066"
            result="effect4_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.6144" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow_263_1066"
            result="effect5_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.0752" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect5_dropShadow_263_1066"
            result="effect6_dropShadow_263_1066"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect6_dropShadow_263_1066"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_dddddd_263_1066"
          x="1.8496"
          y="0.8496"
          width="29.3008"
          height="30.3008"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0256" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_1066" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0512" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_263_1066"
            result="effect2_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.1792" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_263_1066"
            result="effect3_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.3584" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_263_1066"
            result="effect4_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.6144" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow_263_1066"
            result="effect5_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.0752" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect5_dropShadow_263_1066"
            result="effect6_dropShadow_263_1066"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect6_dropShadow_263_1066"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_dddddd_263_1066"
          x="-0.2"
          y="-0.2"
          width="31.4"
          height="31.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0256" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_1066" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.0512" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_263_1066"
            result="effect2_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.1792" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_263_1066"
            result="effect3_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.3584" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow_263_1066"
            result="effect4_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.6144" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow_263_1066"
            result="effect5_dropShadow_263_1066"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.0752" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect5_dropShadow_263_1066"
            result="effect6_dropShadow_263_1066"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect6_dropShadow_263_1066"
            result="shape"
          />
        </filter>
        <clipPath id="bgblur_1_263_1066_clip_path" transform="translate(0.2 0.2)">
          <circle cx="15.5" cy="15.5" r="12.5" />
        </clipPath>
        <radialGradient
          id="paint0_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(23.0983 3.81571) rotate(93.8716) scale(25.2528 48.2977)"
        >
          <stop stopColor="#FC90D1" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.0421 23.4972) rotate(-33.6638) scale(35.1645 43.7306)"
        >
          <stop stopColor="#F3C5FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.0876 31.6016) rotate(-78.267) scale(35.7269 48.2945)"
        >
          <stop stopColor="#AAD2FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.8071 15.9487) rotate(153.156) scale(24.0704 46.013)"
        >
          <stop stopColor="#FC90D1" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.17453 12.2233) rotate(26.5095) scale(33.1101 42.1751)"
        >
          <stop stopColor="#F3C5FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.52726 28.6574) rotate(-18.9604) scale(33.9395 46.1653)"
        >
          <stop stopColor="#AAD2FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint6_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.8214 15.9487) rotate(151.339) scale(22.6624 45.2516)"
        >
          <stop stopColor="#FC90D1" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint7_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.93938 12.2233) rotate(28.311) scale(31.1615 41.4929)"
        >
          <stop stopColor="#F3C5FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint8_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.26598 28.6574) rotate(-20.3568) scale(31.7002 45.7651)"
        >
          <stop stopColor="#AAD2FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint9_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.8214 15.4507) rotate(152.275) scale(22.4649 43.8938)"
        >
          <stop stopColor="#FC90D1" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.93938 11.8685) rotate(27.3829) scale(30.896 40.2399)"
        >
          <stop stopColor="#F3C5FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint11_radial_263_1066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.26598 27.6705) rotate(-19.6347) scale(31.5552 44.2072)"
        >
          <stop stopColor="#AAD2FF" />
          <stop offset="0.796674" stopColor="#F0F0F0" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_263_1066">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QuestionIcon;

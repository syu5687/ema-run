interface BridalPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BridalPopup({ isOpen, onClose }: BridalPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-[10px] shadow-lg w-full max-w-[764px] mx-auto">
        <button
          onClick={onClose}
          className="absolute right-[30px] top-[-25px] size-[65px] cursor-pointer hover:opacity-80 transition-opacity z-10"
          aria-label="閉じる"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
            <g>
              <g filter="url(#filter0_d_popup)">
                <circle cx="32.5" cy="32.5" fill="white" r="32.5" />
              </g>
              <g>
                <line stroke="black" strokeWidth="3" x1="18.5609" x2="47.1675" y1="18.4392" y2="47.0459" />
                <line stroke="black" strokeWidth="3" x1="18.0459" x2="46.6525" y1="47.0459" y2="18.4393" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69" id="filter0_d_popup" width="69" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_popup" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_popup" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
        
        <div className="flex flex-col items-center px-[35px] py-[25px]">
          <div className="content-center flex flex-wrap gap-[30px] items-center justify-center px-0 py-[15px] relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]">
              <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                【来館特典】
              </p>
              <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト235
              </p>
            </div>
            <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] gap-[10px] grow items-center leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px]">
              <p className="relative shrink-0 text-[#9f941d] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                【成約特典】
              </p>
              <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
          
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 574 1">
                <line stroke="black" x2="574" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col items-center px-0 py-[15px] relative shrink-0 w-full">
            <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "'wght' 400" }}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト180
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

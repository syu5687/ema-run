function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function Hissu() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function FormInput() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        選択してください
      </p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">▼</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[79px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_select">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu />
      <FormTitle />
      <FormInput />
    </div>
  );
}

function Hissu1() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        来館時間
      </p>
    </div>
  );
}

function FormInput1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        選択してください
      </p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">▼</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect2() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[79px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_select2">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu1 />
      <FormTitle1 />
      <FormInput1 />
    </div>
  );
}

function Hissu2() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        来館希望日
      </p>
    </div>
  );
}

function FormInput2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        選択してください
      </p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">▼</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect3() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_select3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu2 />
      <FormTitle2 />
      <FormInput2 />
    </div>
  );
}

function Hissu3() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle3() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
    </div>
  );
}

function FormInput3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[80px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu3 />
      <FormTitle3 />
      <FormInput3 />
    </div>
  );
}

function Hissu4() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ふりがな
      </p>
    </div>
  );
}

function FormInput4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ふりがな
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu1() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[80px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu4 />
      <FormTitle4 />
      <FormInput4 />
    </div>
  );
}

function Hissu5() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        連絡先番号
      </p>
    </div>
  );
}

function FormInput5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full">000000000000</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu2() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[80px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu5 />
      <FormTitle5 />
      <FormInput5 />
    </div>
  );
}

function Hissu6() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        メールアドレス
      </p>
    </div>
  );
}

function FormInput6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full">example@mail.com</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu3() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[92px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Hissu6 />
      <FormTitle6 />
      <FormInput6 />
    </div>
  );
}

function Nini() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="nini">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        任意
      </p>
    </div>
  );
}

function FormTitle7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px px-0 py-[5px] relative shrink-0" data-name="formTitle">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        その他、お問い合わせ内容
      </p>
    </div>
  );
}

function FormInput7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[32px] items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormNini() {
  return (
    <div className="content-start flex flex-wrap gap-[5px] h-[114px] items-start px-[8px] py-[30px] relative shrink-0 w-[764px]" data-name="itemForm_nini">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Nini />
      <FormTitle7 />
      <FormInput7 />
    </div>
  );
}

function SubmitBtn() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="submitBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        送信する
      </p>
    </div>
  );
}

function Inner() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="inner">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[30px] py-[50px] relative w-full">
          <ItemFormSelect />
          <ItemFormSelect2 />
          <ItemFormSelect3 />
          <ItemFormHissu />
          <ItemFormHissu1 />
          <ItemFormHissu2 />
          <ItemFormHissu3 />
          <ItemFormNini />
          <SubmitBtn />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <Inner />
    </div>
  );
}

function FairMainContents() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairMainContents">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[100px] py-[30px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function BackBtn() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ←戻る
      </p>
    </div>
  );
}

function Wrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrap">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[128px] py-0 relative w-full">
          <Title />
          <FairMainContents />
          <BackBtn />
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[64px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[1280px]" data-name="Desktop">
      <Wrap />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function Hissu7() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle8() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function FormInput8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between leading-[normal] px-[10px] py-[5px] relative text-[16px] text-nowrap w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wght' 400" }}>
            選択してください
          </p>
          <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] not-italic relative shrink-0 text-black">▼</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect1() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_select">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu7 />
        <FormTitle8 />
        <FormInput8 />
      </div>
    </div>
  );
}

function Hissu8() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle9() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        来館時間
      </p>
    </div>
  );
}

function FormInput9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between leading-[normal] px-[10px] py-[5px] relative text-[16px] text-nowrap w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wght' 400" }}>
            選択してください
          </p>
          <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] not-italic relative shrink-0 text-black">▼</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect4() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_select2">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu8 />
        <FormTitle9 />
        <FormInput9 />
      </div>
    </div>
  );
}

function Hissu9() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle10() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        来館希望日
      </p>
    </div>
  );
}

function FormInput10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between leading-[normal] px-[10px] py-[5px] relative text-[16px] text-nowrap w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wght' 400" }}>
            選択してください
          </p>
          <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] not-italic relative shrink-0 text-black">▼</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect5() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_select3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu9 />
        <FormTitle10 />
        <FormInput10 />
      </div>
    </div>
  );
}

function Hissu10() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle11() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
    </div>
  );
}

function FormInput11() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            お名前
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu4() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu10 />
        <FormTitle11 />
        <FormInput11 />
      </div>
    </div>
  );
}

function Hissu11() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle12() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ふりがな
      </p>
    </div>
  );
}

function FormInput12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative w-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            ふりがな
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu5() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu11 />
        <FormTitle12 />
        <FormInput12 />
      </div>
    </div>
  );
}

function Hissu12() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle13() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        連絡先番号
      </p>
    </div>
  );
}

function FormInput13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative w-full">
          <p className="font-['Noto_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full">000000000000</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu6() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu12 />
        <FormTitle13 />
        <FormInput13 />
      </div>
    </div>
  );
}

function Hissu13() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle14() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        メールアドレス
      </p>
    </div>
  );
}

function FormInput14() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative w-full">
          <p className="font-['Noto_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full">example@mail.com</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu7() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Hissu13 />
        <FormTitle14 />
        <FormInput14 />
      </div>
    </div>
  );
}

function Nini1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="nini">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        任意
      </p>
    </div>
  );
}

function FormTitle15() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative self-stretch shrink-0 w-[135px]" data-name="formTitle">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        その他、お問い合わせ内容
      </p>
    </div>
  );
}

function FormInput15() {
  return (
    <div className="basis-0 bg-white grow h-[32px] min-h-px min-w-px relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative size-full">
          <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
            お名前
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormNini1() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_nini">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[5px] items-start px-[8px] py-[30px] relative w-full">
        <Nini1 />
        <FormTitle15 />
        <FormInput15 />
      </div>
    </div>
  );
}

function SubmitBtn1() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="submitBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        送信する
      </p>
    </div>
  );
}

function Inner1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="inner">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[30px] py-[50px] relative w-full">
          <ItemFormSelect1 />
          <ItemFormSelect4 />
          <ItemFormSelect5 />
          <ItemFormHissu4 />
          <ItemFormHissu5 />
          <ItemFormHissu6 />
          <ItemFormHissu7 />
          <ItemFormNini1 />
          <SubmitBtn1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <Inner1 />
    </div>
  );
}

function FairMainContents1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-0 py-[30px] relative shrink-0 w-full" data-name="fairMainContents">
      <Frame1 />
    </div>
  );
}

function BackBtn1() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ←戻る
      </p>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrap">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[50px] py-0 relative w-full">
          <Title1 />
          <FairMainContents1 />
          <BackBtn1 />
        </div>
      </div>
    </div>
  );
}

function Tablet() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[1408px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[800px]" data-name="Tablet">
      <Wrap1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[normal] pb-[50px] pt-0 px-0 relative shrink-0 text-black text-center w-full" data-name="title">
      <p className="font-['Noto_Sans:Regular',sans-serif] not-italic relative shrink-0 text-[32px] w-full">Contactform</p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function Hissu14() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle16() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        お問い合わせ
      </p>
    </div>
  );
}

function FormInput16() {
  return (
    <div className="bg-white content-stretch flex items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-[128px]" style={{ fontVariationSettings: "'wght' 400" }}>
        選択してください
      </p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">▼</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect6() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="itemForm_select">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Hissu14 />
        <FormTitle16 />
        <FormInput16 />
      </div>
    </div>
  );
}

function Hissu15() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle17() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        来館時間
      </p>
    </div>
  );
}

function FormInput17() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wght' 400" }}>
        選択してください
      </p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">▼</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect7() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="itemForm_select2">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Hissu15 />
        <FormTitle17 />
        <FormInput17 />
      </div>
    </div>
  );
}

function Hissu16() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle18() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        来館希望日
      </p>
    </div>
  );
}

function FormInput18() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wght' 400" }}>
        選択してください
      </p>
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">▼</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormSelect8() {
  return (
    <div className="relative shrink-0 w-full" data-name="itemForm_select3">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative w-full">
        <Hissu16 />
        <FormTitle18 />
        <FormInput18 />
      </div>
    </div>
  );
}

function Hissu17() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle19() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
    </div>
  );
}

function FormInput19() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu8() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Hissu17 />
        <FormTitle19 />
        <FormInput19 />
      </div>
    </div>
  );
}

function Hissu18() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle20() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ふりがな
      </p>
    </div>
  );
}

function FormInput20() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        ふりがな
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu9() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Hissu18 />
        <FormTitle20 />
        <FormInput20 />
      </div>
    </div>
  );
}

function Hissu19() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle21() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        連絡先番号
      </p>
    </div>
  );
}

function FormInput21() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full">000000000000</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu10() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Hissu19 />
        <FormTitle21 />
        <FormInput21 />
      </div>
    </div>
  );
}

function Hissu20() {
  return (
    <div className="bg-[#a72727] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="hissu">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        必須
      </p>
    </div>
  );
}

function FormTitle22() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        メールアドレス
      </p>
    </div>
  );
}

function FormInput22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full">example@mail.com</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormHissu11() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="itemForm_hissu">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Hissu20 />
        <FormTitle22 />
        <FormInput22 />
      </div>
    </div>
  );
}

function Nini2() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex h-[32px] items-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[60px]" data-name="nini">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white" style={{ fontVariationSettings: "'wght' 400" }}>
        任意
      </p>
    </div>
  );
}

function FormTitle23() {
  return (
    <div className="content-stretch flex items-start px-0 py-[5px] relative shrink-0 w-[135px]" data-name="formTitle">
      <p className="basis-0 font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        その他、お問い合わせ内容
      </p>
    </div>
  );
}

function FormInput23() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[32px] items-center justify-center px-[10px] py-[5px] relative rounded-[5px] shrink-0 w-[543px]" data-name="formInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        お名前
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_3px_4px_4px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ItemFormNini2() {
  return (
    <div className="h-[151px] relative shrink-0 w-full" data-name="itemForm_nini">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[5px] items-start px-[10px] py-[30px] relative size-full">
        <Nini2 />
        <FormTitle23 />
        <FormInput23 />
      </div>
    </div>
  );
}

function SubmitBtn2() {
  return (
    <div className="bg-[#a72727] content-stretch flex items-center justify-center p-[15px] relative rounded-[30px] shrink-0" data-name="submitBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] h-[27px] leading-[normal] relative shrink-0 text-[20px] text-center text-white w-[300px]" style={{ fontVariationSettings: "'wght' 400" }}>
        送信する
      </p>
    </div>
  );
}

function Inner2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="inner">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[10px] py-[50px] relative w-full">
          <ItemFormSelect6 />
          <ItemFormSelect7 />
          <ItemFormSelect8 />
          <ItemFormHissu8 />
          <ItemFormHissu9 />
          <ItemFormHissu10 />
          <ItemFormHissu11 />
          <ItemFormNini2 />
          <SubmitBtn2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative rounded-[10px] shrink-0 w-full" data-name="Frame">
      <Inner2 />
    </div>
  );
}

function FairMainContents2() {
  return (
    <div className="relative shrink-0 w-full" data-name="fairMainContents">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[10px] py-[30px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function BackBtn2() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="backBtn">
      <p className="font-['Noto_Sans:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        ←戻る
      </p>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="wrap">
      <Title2 />
      <FairMainContents2 />
      <BackBtn2 />
    </div>
  );
}

function Mobile() {
  return (
    <div className="absolute bg-[#ececec] content-stretch flex flex-col items-start left-[2272px] overflow-x-clip overflow-y-auto px-0 py-[30px] top-[100px] w-[375px]" data-name="Mobile">
      <Wrap2 />
    </div>
  );
}

export default function Contactform() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative size-full" data-name="/contactform">
      <Desktop />
      <Tablet />
      <Mobile />
    </div>
  );
}
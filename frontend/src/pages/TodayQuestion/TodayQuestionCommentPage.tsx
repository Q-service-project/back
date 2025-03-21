import { useState } from 'react';
import BackArrow from '../../components/common/BackArrow';
import Squre from '../../assets/Squre';

const TodayQuestionCommentPage = () => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <main className="-z-1 flex min-h-[100svh] flex-col items-center justify-between p-6">
        <div>
          <div className="mb-16">
            <BackArrow label="작성취소" />
          </div>

          <form className="relative z-10 w-full" id="today-question">
            <p className="bg-circle-gradient mb-6 bg-clip-text text-center text-2xl/10 break-keep text-transparent">
              다시 태어난다면, 당신은 어떻게 살고싶나요?
            </p>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="comment"
              id="comment"
              maxLength={500}
              className="font-desc z-30 h-[270px] w-full resize-none rounded-sm border border-white/50 bg-white/10 p-4 backdrop-blur-xs outline-none placeholder:text-white"
              placeholder="답변을 작성해주세요"
            />
            <div className="font-desc text-right text-sm">{`${value.length || 0} / 500`}</div>
            <div aria-hidden className="animate-spin-second absolute top-[15%] right-[-5%] -z-10">
              <Squre size={60} />
            </div>
            <div aria-hidden className="animate-spin-third absolute bottom-[-5%] left-[-5%] -z-10">
              <Squre size={100} />
            </div>
          </form>
        </div>
        <button
          form="today-question"
          className="font-desc w-full cursor-pointer rounded-xl bg-white py-4 text-sm font-bold text-black"
        >
          답글 작성완료
        </button>
      </main>
    </>
  );
};

export default TodayQuestionCommentPage;

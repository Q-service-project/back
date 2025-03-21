import { Link, useLocation } from 'react-router-dom';

import AddQuestionIcon from '../assets/Icons/nav/AddQuestionIcon';
import MyPageIcon from '../assets/Icons/nav/MyPageIcon';
import QuestionIcon from '../assets/Icons/nav/QuestionIcon';
import QuestionListIcon from '../assets/Icons/nav/QuestionListIcon';

const TabNavPaths = [
  {
    path: '/today-question',
    label: '오늘의 질문',
    icon: (isActive: boolean) => <QuestionIcon isActive={isActive} />,
  },
  {
    path: '/question',
    label: '질문하기',
    icon: (isActive: boolean) => <AddQuestionIcon isActive={isActive} />,
  },
  {
    path: '/question-list',
    label: '질문목록',
    icon: (isActive: boolean) => <QuestionListIcon isActive={isActive} />,
  },
  {
    path: '/my',
    label: '내 활동',
    icon: (isActive: boolean) => <MyPageIcon isActive={isActive} />,
  },
];

const TabNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="absolute bottom-0 left-0 w-full overflow-hidden rounded-t-[20px] border border-white/40 bg-white/5 py-2">
      <ul className="flex h-full w-full items-center justify-evenly">
        {TabNavPaths.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path}>
              <Link to={item.path} className="flex flex-col items-center justify-center gap-1">
                {item.icon(isActive)}
                <span
                  className={`font-desc v text-[10px] tracking-tighter ${isActive && 'text-[#FC90D1]'}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabNav;

import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';

import HomePage from '../pages/HomePage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import QuestionPage from '../pages/QuestionPage.tsx';
import SettingPage from '../pages/SettingPage.tsx';
import MyActivityPage from '../pages/MyActivityPage.tsx';

// 오늘의 질문
import TodayQuestionPage from '../pages/TodayQuestion/TodayQuestionPage.tsx';
import TodayQuestionCommentPage from '../pages/TodayQuestion/TodayQuestionCommentPage.tsx';
import TodayQuestionLayout from '../pages/TodayQuestion/TodayQuestionLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      {
        path: '/today-question',
        element: <TodayQuestionLayout />,
        id: 'today-question',
        children: [
          {
            index: true,
            element: <TodayQuestionPage />,
          },
          {
            path: '/today-question/comment',
            element: <TodayQuestionCommentPage />,
          },
        ],
      },
      { path: '/question', element: <QuestionPage /> },
      { path: '/setting', element: <SettingPage /> },
      { path: '/my-activity', element: <MyActivityPage /> },
    ],
  },
]);

export default router;

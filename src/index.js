import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import Carts from './pages/Carts/Carts';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import HomeTemplate from './templates/HomeTemplate';
// Cấu hình redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore'
import HomeMobile from './pages/Home/HomeMobile';
import ResponsiveItem from './hoc/ResponsiveItem';
import HomeTemplateMobile from './templates/HomeTemplateMobile';
// Cấu hình react router dom

// Tạo ra 1 biến quản lý chuyển hướng trang
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import DemoModal from './hoc/DemoModal';
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<ResponsiveItem component={HomeTemplate} componentMobile={HomeTemplateMobile} />}>
          <Route index element={<ResponsiveItem component={Home} componentMobile={HomeMobile} />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='carts' element={<Carts />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
          <Route path='*' element={<Navigate to='' />}></Route>
          <Route path='demodal' element={<DemoModal />}></Route>

        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);


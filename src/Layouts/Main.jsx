import React from 'react';
import Navber from '../Pages/Share/Navber';
import { Outlet } from 'react-router-dom';
import Fotter from '../Pages/Share/Fotter';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;
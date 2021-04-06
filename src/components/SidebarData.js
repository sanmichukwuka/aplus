import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'AMIT Cleaning',
        path: '/book-now',
        icon: <GiIcons.GiVacuumCleaner />,
        cName: 'nav-text'
    },
    
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'ContactUs',
        path: '/contactus',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Process',
        path: '/process',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
]
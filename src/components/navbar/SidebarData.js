import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: "Base64 encode",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Text length",
        path: '/symbolscounter',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: "Words count",
        path: '/wordscount',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    }
]
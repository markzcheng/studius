import React, { useState } from 'react';
import * as AI from 'react-icons/ai';
import * as IO from "react-icons/io5";

export const SidebarData = [
    {
        title: 'focus',
        path: '/study',
        icon: <AI.AiOutlineClockCircle />,
        cName: 'nav-text'
    },
    {
        title: 'schedule',
        path: '/calendar',
        icon: <AI.AiOutlineCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'tasks & goals',
        path: '/tasks',
        icon: <AI.AiOutlineUnorderedList/>,
        cName: 'nav-text'
    },
    {
        title: 'music',
        path: '/music',
        icon: <IO.IoMusicalNoteOutline/>,
        cName: 'nav-text'
    },
    {
        title: 'profile',
        path: '/profile',
        icon: <IO.IoPerson />,
        cName: 'nav-text'
    },
    {
        title: 'settings',
        path: '/settings',
        icon: <AI.AiOutlineSetting />,
        cName: 'nav-text'
    },
]
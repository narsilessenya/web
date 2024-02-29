import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: ' ',
  },
  {
    id: uniqueId(),
    title: '首页',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: '考试管理',
  },
  {
    id: uniqueId(),
    title: '阅卷管理',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: '考试管理',
    icon: IconCopy,
    href: '/ui/shadow',
  },

  {
    navlabel: true,
    subheader: '学生管理',
  },
  {
    id: uniqueId(),
    title: '班级管理',
    icon: IconMoodHappy,
    href: '/icons',
  },
  {
    id: uniqueId(),
    title: '学生管理',
    icon: IconAperture,
    href: '/sample-page',
  },


  {
    navlabel: true,
    subheader: '账号',
  },
  {
    id: uniqueId(),
    title: '登录',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: '注册',
    icon: IconUserPlus,
    href: '/auth/register',
  },
];

export default Menuitems;

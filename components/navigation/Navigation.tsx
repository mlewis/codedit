import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';

import Browse from '../../icons/browse.svg';
import Gear from '../../icons/gear.svg';
import User from '../../icons/user.svg';

const navigationItems = [
  {
    name: 'Browse',
    path: '/browse',
    icon: <Browse />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <User />,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: <Gear />,
  },
];

const Navigation: React.FC = (): React.ReactElement => (
  <Wrapper>
    {navigationItems.map(item => (
      <NavigationItem
        key={`nav-item-${item.name}`}
        path={item.path}
        name={item.name}
        icon={item.icon}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #FFF;
  background-color: ${props => props.theme.colors.secondary};
`;

export default Navigation;

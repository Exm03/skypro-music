/* eslint-disable react/prop-types */
import * as S from './sideBarItem.styles';
import React from 'react';

export function SideBarItem ({sideBar}) {
	return (
		<S.SidebarItem>
			<S.SidebarLink href={sideBar.link}>
			<S.SidebarImage 
				src={sideBar.img}
				alt={sideBar.name}
			/>
			</S.SidebarLink>
		</S.SidebarItem>
	)
}
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './sideBar.styles'

export function SideBar({ isLoading, categories }) {

  const handleLogOut = (token) => {
    localStorage.removeItem('token', token)
    window.location.reload()
  }

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <NavLink to="/login">
              <S.SidebarIcon href="#" onClick={handleLogOut}>
                <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
          </S.SidebarIcon>
              </NavLink>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {isLoading ? (
          <S.SidebarList>
            <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
            <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
            <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
          </S.SidebarList>
        ) : (
          <S.SidebarList>
            {categories.map((category) => {
              return (
                <S.SidebarItem key={category.id}>
                  <S.SidebarLink to={`/category/${category.id}`}>
                    <S.SidebarImage src={category.img} alt={category.title} />
                  </S.SidebarLink>
                </S.SidebarItem>
              )
            })}
          </S.SidebarList>
        )}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
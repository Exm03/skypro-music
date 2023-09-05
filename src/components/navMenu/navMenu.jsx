/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import * as S from './navMenu.styles'
import { NavLink } from 'react-router-dom'

export function NavMenu({ setToken }) {
  const [isOpenMenu, setOpenMenu] = useState(false)

  function handleClickMenu() {
    setOpenMenu(!isOpenMenu)
  }

  const handleLogOut = () => {
    localStorage.removeItem('token', token)
    setToken(false)
  }

  return (
    <S.MainNav>
      <S.NavLogo>
      <NavLink to="/">
        <S.LogoImage href="#" src="../img/logo.png" alt="logo" />
        </NavLink>
      </S.NavLogo>
      <S.NavBurger onClick={handleClickMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {isOpenMenu ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
            <NavLink to="/">
              <S.MenuLink href="#">Главное</S.MenuLink>
              </NavLink>
            </S.MenuItem>
            <S.MenuItem>
            <NavLink to="/favourites">
              <S.MenuLink href="#">Мой плейлист</S.MenuLink>
              </NavLink>
            </S.MenuItem>
            <S.MenuItem>
            <NavLink to="/login">
              <S.MenuLink href="#" onClick={handleLogOut}>Выйти</S.MenuLink>
              </NavLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  )
}
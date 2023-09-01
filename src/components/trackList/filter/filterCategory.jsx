/* eslint-disable react/prop-types */
import React from 'react'
import * as S from './filterCategory.styles'
import { FilterCategoryAuthor } from './filterCategoryAuthor'
import { FilterCategoryYear } from './FilterCategoryYear'
import { FilterCategoryGanr } from './FilterCategoryGanr'

export function FilterCategory({ onShow, title,author, year, ganr}) {
  return (
    <S.FilterButton onClick={onShow} className="_btn-text">
      {title}
      {author ? <FilterCategoryAuthor /> : null}
      {year ? <FilterCategoryYear /> : null}
      {ganr ? <FilterCategoryGanr /> : null}
    </S.FilterButton>
  )
}

'use client'

import React, { useEffect } from 'react'

import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  useEffect(() => {
    function getImplicitPreference(): 'light' | 'dark' | null {
      const mediaQuery = '(prefers-color-scheme: dark)'
      const mql = window.matchMedia(mediaQuery)

      if (typeof mql.matches === 'boolean') {
        return mql.matches ? 'dark' : 'light'
      }

      return null
    }

    function themeIsValid(
      theme: string | null,
    ): theme is 'light' | 'dark' {
      return theme === 'light' || theme === 'dark'
    }

    let themeToSet: 'light' | 'dark' =
      defaultTheme === 'dark' ? 'dark' : 'light'

    const preference = window.localStorage.getItem(
      themeLocalStorageKey,
    )

    if (themeIsValid(preference)) {
      themeToSet = preference
    } else {
      const implicitPreference = getImplicitPreference()

      if (implicitPreference) {
        themeToSet = implicitPreference
      }
    }

    document.documentElement.setAttribute(
      'data-theme',
      themeToSet,
    )
  }, [])

  return null
}
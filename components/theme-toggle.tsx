/*  Interruptor de tema claro/oscuro

    Revisión ID: CV19102026003
    Created by: Francisco Mireles Rodriguez
*/

'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Cambiar entre tema claro y oscuro"
      data-dark={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="theme-toggle"
    >
      <span className="theme-toggle-thumb">
        <Sun size={12} strokeWidth={2.5} className="theme-icon theme-icon-sun" />
        <Moon size={12} strokeWidth={2.5} className="theme-icon theme-icon-moon" />
      </span>
    </button>
  )
}

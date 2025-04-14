// Immediately apply the correct theme to prevent flash
if (typeof window !== 'undefined') {
  let theme = 'dark' // default theme
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      theme = stored
    } else if (stored === 'system' || !stored) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  } catch (e) {
    console.error('Failed to get theme', e)
  }
  
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
  document.documentElement.style.setProperty('color-scheme', theme)
}

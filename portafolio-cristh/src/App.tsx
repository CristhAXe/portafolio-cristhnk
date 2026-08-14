import { useEffect, useState } from 'react'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { PageTemplate } from './components/PageTemplate/PageTemplate'
import './App.css'

export type PageId = 'inicio' | 'sobre-mi' | 'proyectos' | 'contacto'
export type Language = 'es' | 'en'

const validPages: PageId[] = ['inicio', 'sobre-mi', 'proyectos', 'contacto']

function pageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId
  return validPages.includes(hash) ? hash : 'inicio'
}

function App() {
  const [page, setPage] = useState<PageId>(pageFromHash)
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es')

  useEffect(() => {
    const updatePage = () => setPage(pageFromHash())
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <>
      <Navbar activePage={page} language={language} onLanguageChange={setLanguage} />
      <main>{page === 'inicio' ? <Hero language={language} /> : <PageTemplate page={page} language={language} />}</main>
    </>
  )
}

export default App

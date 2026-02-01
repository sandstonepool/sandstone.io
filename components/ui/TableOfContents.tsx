'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [headings, setHeadings] = useState<TocItem[]>([])

  useEffect(() => {
    const regex = /^(#{2,4})\s+(.+)$/gm
    const matches: TocItem[] = []
    let match

    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      matches.push({ id, text, level })
    }

    setHeadings(matches)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    headings.forEach(heading => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-6 mb-8">
      <h2 className="text-lg font-bold mb-4 text-gray-900">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map(heading => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors ${
                activeId === heading.id
                  ? 'text-indigo-600 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={e => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  setActiveId(heading.id)
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

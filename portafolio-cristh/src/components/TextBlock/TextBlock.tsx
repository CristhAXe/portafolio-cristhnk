import type { ReactNode } from 'react'
import './TextBlock.css'

type TextBlockProps = {
  children: ReactNode
  className?: string
}

export function TextBlock({ children, className = '' }: TextBlockProps) {
  return <p className={`text-block ${className}`}>{children}</p>
}

import './EditorialTitle.css'

type EditorialTitleProps = {
  lines: string[]
}

export function EditorialTitle({ lines }: EditorialTitleProps) {
  return (
    <h1 className="editorial-title">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </h1>
  )
}

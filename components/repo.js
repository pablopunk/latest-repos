import colors from 'sick-colors'

const getLanguageColor = lang => {
  switch (lang.toLowerCase()) {
    case 'unknown':
      return colors.black
    case 'typescript':
      return colors.green
    case 'javascript':
      return colors.yellow
    case 'shell':
      return colors.cyan
    case 'vim script':
    case 'rust':
      return colors.red
    case 'html':
      return colors.red
    case 'python':
    case 'scss':
    case 'css':
      return colors.blue
    default:
      return colors.black
  }
}

export default ({ repo: { name, description, url, language: lang } }) => {
  lang = lang || 'unknown'

  const langColor = getLanguageColor(lang)

  return (
    <div>
      <article>
        <a href={url} className="title">
          <h2>{name}</h2>
          <small
            style={{
              color: langColor,
              border: `1px solid ${langColor}`
            }}
          >
            {lang}
          </small>
        </a>
        <p>{description}</p>
      </article>
      <style jsx>{`
        a {
          text-decoration: none;
          color: initial;
        }
        .title {
          display: flex;
          align-items: center;
        }
        .title > * {
          margin-right: 0.5em;
        }
        h2 {
          display: inline;
          color: ${colors.magenta};
          transition: 0.3s;
        }
        h2:hover {
          color: ${colors.blue};
          text-decoration: underline;
        }
        article {
          width: 100%;
          padding: 1em;
        }
        small {
          padding: 2px 5px;
          border-radius: 5px;
        }
        p {
          color: #c3c3c3;
          margin-top: 0;
        }
      `}</style>
    </div>
  )
}

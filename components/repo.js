import colors from 'sick-colors'

export default ({
  repo: { name, description, url, primaryLanguage: lang }
}) => {
  return (
    <div>
      <article>
        <a href={url} className="title">
          <h2>{name}</h2>
          {lang ? <small>({lang.name})</small> : <small>(unknown)</small>}
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
          color: ${colors.green};
        }
        p {
          color: #c3c3c3;
          margin-top: 0;
        }
      `}</style>
    </div>
  )
}

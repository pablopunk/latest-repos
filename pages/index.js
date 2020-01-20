import React from 'react'
import fetch from 'isomorphic-fetch'
import colors from 'sick-colors'
import Repo from '../components/repo'

export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://repos.pablopunk.com')
    const repos = await res.json()

    return { repos: repos.reverse() }
  }

  render() {
    const { repos = [] } = this.props

    return (
      <div>
        <p>Welcome.</p>
        <p>
          You can go to <a href="https://pablo.pink">my personal website</a>{' '}
          instead.
        </p>
        <h1>Latest projects on GitHub</h1>
        <section>
          {repos.map(repo => (
            <Repo key={repo.url} repo={repo} />
          ))}
        </section>
        <style jsx>{`
          h1 {
            font-size: 1.5em;
            background-color: ${colors.black};
            padding: 0.5em 0.5em;
          }
          section {
            border-left: 1px solid ${colors.white}40;
          }
          p {
            text-align: center;
          }
          a {
            color: ${colors.red};
          }
        `}</style>
      </div>
    )
  }
}

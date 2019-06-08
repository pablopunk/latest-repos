import React from 'react'
import fetch from 'isomorphic-fetch'
import colors from 'sick-colors'
import Repo from '../components/repo'

async function fetchRepos() {
  const res = await fetch('https://repos.pablopunk.now.sh')
  const repos = await res.json()

  return repos.reverse()
}

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { loading: true, repos: [] }
  }
  componentDidMount() {
    if (!this.state.repos || this.state.repos.length === 0) {
      fetchRepos().then(repos => this.setState({ repos, loading: false }))
    }
  }
  render() {
    const { repos = [], loading } = this.state

    return (
      <div>
        <p>Welcome.</p>
        <p>
          You can go to <a href="https://pablo.life">my personal website</a>{' '}
          instead.
        </p>
        <h1>Latest projects on GitHub</h1>
        {this.state.loading && (
          <p>
            <marquee>...</marquee>
            Loading
            <marquee>...</marquee>
          </p>
        )}
        <section>
          {repos.map((repo, i) => (
            <Repo key={i} repo={repo} />
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

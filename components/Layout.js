export default ({ children }) => (
  <div>
    <main>{children}</main>
    <style jsx>{`
      main {
        margin: 0 auto;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>
)

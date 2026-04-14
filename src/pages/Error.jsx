import '../pages/error.scss'

function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href='/home'>Retourner sur la page d’accueil</a>
  </div>
  )
}

export default Error;
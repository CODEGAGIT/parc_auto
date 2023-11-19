import React from 'react'

function Pages() {
  return (
    <div class="container-fluid">

    {/*  404 Error Text  */}
    <div class="text-center">
        <div class="error mx-auto" data-text="404">404</div>
        <p class="lead text-gray-800 mb-5">Page Not Found</p>
        <p class="text-gray-500 mb-0">ERREUR!!!<br/>Verifier le nom et le mot de passe saisie...</p>
        <a href="/">&larr; Back to login</a>
    </div>

</div>
  )
}

export default Pages
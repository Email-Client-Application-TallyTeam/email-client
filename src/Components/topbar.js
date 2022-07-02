import React from 'react'

function topbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light row m-1">
  <a class="navbar-brand col-6" href="#">TallyMail</a>
  <div class="collapse navbar-collapse col-6" id="navbarNav">
    <ul class="navbar-nav row">
      <li class=" nav-item active col-sm">
        <a class="nav-link " href="#">About</a>
      </li>
      <li class="nav-item col-sm">
        <a class="nav-link" href="#">Support us </a>
      </li>
      <li class="nav-item col-sm">
      <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        UserAccount1
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">userAccount1</a>
        <a class="dropdown-item" href="#">useraccount2</a>
        <a class="dropdown-item" href="#">Add another account</a>
      </div>
    </div>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default topbar
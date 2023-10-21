<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <routerLink to="/" class="nav-link active" aria-current="page" href="#">Product</routerLink>
          </li>
          <li class="nav-item">
            <routerLink to="/cart" class="nav-link active" aria-current="page" href="#">Cart</routerLink>
          </li>
        </ul>
        <div class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>

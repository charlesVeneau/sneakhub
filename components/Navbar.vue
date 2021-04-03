<template>
  <nav class="navbar">
    <div class="logo">
      <Logo />
      <h3 class="logo-title">Sneakhub</h3>
    </div>
    <ul class="menu-main">
      <li class="menu-elt">
        <router-link to="/" class="menu-link">Home</router-link>
      </li>
      <li class="menu-elt">
        <router-link to="/shop" class="menu-link">Shop</router-link>
      </li>
    </ul>
    <ul class="menu-second">
      <li class="menu-elt"><a href="#" class="menu-link">$0.00</a></li>
      <li class="menu-elt"><a href="" class="menu-link">Shopping Cart</a></li>
    </ul>
  </nav>
</template>

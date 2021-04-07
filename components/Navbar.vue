<template>
  <nav class="navbar">
    <div class="logo">
      <Logo />
      <h3 class="logo-title">Sneakhub</h3>
    </div>
    <ul class="menu-main">
      <li class="menu-elt">
        <NuxtLink to="/" class="menu-link">Home</NuxtLink>
      </li>
      <li class="menu-elt">
        <NuxtLink to="/shop" class="menu-link">Shop</NuxtLink>
      </li>
    </ul>
    <ul class="menu-second">
      <li class="menu-elt"><a href="#" class="menu-link">$0.00</a></li>
      <li class="menu-elt"><a href="" class="menu-link">Shopping Cart</a></li>
    </ul>
  </nav>
</template>

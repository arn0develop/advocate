<template>
  <div>
    <header class="white z-depth-1">
      <mdb-container>
        <!--Navbar-->
        <mdb-navbar class="z-depth-0" expand="xl" togglerIcon="" animated animation="1">
          <!-- Navbar brand -->
          <mdb-navbar-brand><router-link to="/"><img class="logo" src="../../public/images/sample-logo.png" alt="logo"/></router-link></mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav right>
              <mdb-nav-item to="/" class="line_links" waves-fixed>Home</mdb-nav-item>
              <mdb-nav-item to="About" class="line_links" waves-fixed>About Us</mdb-nav-item>
              <mdb-nav-item to="Services" class="line_links" waves-fixed>Services</mdb-nav-item>
              <mdb-nav-item to="Contacts" class="line_links" waves-fixed>Contact Us</mdb-nav-item>
              <mdb-nav-item to="#" waves-fixed><mdb-btn class="app_btn">Appointment</mdb-btn></mdb-nav-item>
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
        <!--/.Navbar-->
        <!--Navbar-->
      </mdb-container>
    </header>
  </div>
</template>
<script>
export default {
 name: 'Header'
}
</script>

<script>
  import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbRow, mdbInput, mdbNavbarBrand, mdbIcon, mdbBtn } from 'mdbvue';
  export default {
    name: 'HamburgerMenuPage',
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbContainer,
      mdbRow,
      mdbInput,
      mdbNavbarBrand,
      mdbIcon,
      mdbBtn
    }
  }
</script>




<style lang="scss">
  @import "../../public/sass/style.scss";
</style>

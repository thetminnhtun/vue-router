<template>
  <div>
    <!-- <MenuBar /> -->
    <menu-bar></menu-bar>
    <h1>{{ message }}</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
      inventore nisi, numquam omnis deserunt illo neque cum repellendus est
      ducimus minus! Totam, culpa. Tempora, commodi inventore cumque odio
      accusantium quaerat.
    </p>
    <!-- <the-footer></the-footer> -->
    <TheFooter />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar"
import TheFooter from "./components/TheFooter"

export default {
  name: "App",
  components: {
    MenuBar,
    TheFooter
  },
  data() {
    return {
      message: "Hello Vue Router"
    }
  }
}
</script>

<template>
  <div>
    <menu-bar></menu-bar>
    <profile></profile>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";
import Profile from "@/views/Profile";

export default {
  name: "App",
  components: {
    MenuBar,
    Profile
  }
}
</script>

<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import SingleBlog from './components/SingleBlog'
import BlogHeader from './components/BlogHeader'
// import EditBlog from './components/EditBlog'
export default {
  name: 'App',
  components: {
    AddBlog,ShowBlog,BlogHeader,SingleBlog
  }
}
</script>

<style>

</style>

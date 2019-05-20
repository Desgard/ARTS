<template>
  <div class="header alt">
    <div class="container">
      <h1>
        <a href="/">
          <strong>desgard</strong>
          .com
        </a>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtsHeader"
};
</script>

<style scope>
.header {
  background-color: #484848;
  height: 3.25em;
  line-height: 3.25em;
  width: 100%;
  z-index: 100;
}

.header h1,
.header.alt {
  color: #484848;
  font-size: 1.25em;
  left: 0;
}

.header.alt h1 a,
h1 a strong {
  color: #ffffff;
}

.header .container {
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 56em) {
  .container {
    width: 56em;
  }
}
</style>

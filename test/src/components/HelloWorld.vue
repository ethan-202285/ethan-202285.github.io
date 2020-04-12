<template>
  <div class="hello">
    <div v-if="!login">
      <a href="https://sso.tianwei.pro/user/login?redirect=https://jingtian.pro">登陆</a>
    </div>
    <div v-if="login">
      欢迎回来！您登录的账号为: {{ res.user_info.email }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      login: false,
      res: {}
    }
  },
  mounted() {
    this.$axios
      .get('https://sso.tianwei.pro/api/sam/v1/user/info')
      .then(response => {
        this.res = response.data
      }).catch(error => {
        if (error.response.status === 401) {
          this.login = false;
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

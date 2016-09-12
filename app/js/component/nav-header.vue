<template>
  <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">{{ string.app_name }}</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a class="navbar-brand" href="#">{{ string.app_name }}</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">{{ string.home_page }}</a></li>
          <li><a href="#">{{ string.masterwork_wall_bar }}</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ string.year_index }} <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">2013</a></li>
              <li><a href="#">2014</a></li>
              <li><a href="#">2015</a></li>
              <li class="divider"></li>
              <li><a href="#">{{ string.other }}</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="javascript:" @click="changeLang('cn')">{{ string.chinese }}</a></li>
          <li><a href="javascript:" @click="changeLang('jp')">{{ string.japanese }}</a></li>
          <li><a href="javascript:" @click="changeLang('en')">{{ string.english }}</a></li>
          <li><a href="#">{{ string.sign_in }}</a></li>
          <li><a href="#">{{ string.sign_up }}&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>

</template>

<script>
import { vueStrap } from 'vue-strap'
import boot from 'bootstrap'
import { getLang } from '../vuex/getter/getters'
import { setLang } from '../vuex/action/actions'


export default {
  data () {
    return {}
  },
  methods: {
    changeLang: function (lang) {
      this.setLang(lang);
    }
  },
  components: {  },
  vuex: {
    getters: {
      string: getLang
    },
    actions: {
      setLang
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../../css/color";
  @import "../../css/util";
  .nav-icon {
    padding-top: 15px;
    padding-bottom: 15px;
    color: $nav-icon;
    font-size: 14px;
  }

  .navbar {
    margin-bottom: 0px !important;
  }
</style>
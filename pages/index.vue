<template>
  <div>
    <div id="mynav">
      <div id="navmain">
        <div id="logo">Maki's Lab</div>
      </div>
    </div>

    <div id="introbox">
      <div id="intro">{{Slogan}}</div>
    </div>
    <!-- 课程列表 -->
    <div id="courses"  v-for="(item,index) in professional" :key="index">

      <div class="ProfessionalTitle"> {{ item.title }} {{ item.english }}</div>

      <div class="card" v-for="(items,indexs) in item.direction" :key="indexs">
        <h4 class="card-title">{{ items.title }}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{items.dependencies}}</h6>
        <a href="courses/eden&alex_mathematical_analysis/course.html" class="btn btn-link" v-for="(i,course) in items.course" :key="i">{{ course.title}} </a>
      </div>

    </div>
  </div>
</template>
  
<script>
// 引入axios
import axios from "axios";
export default {
  data() {
    return {
      Slogan: "",       // 每日标语
      Professional:[],  // 专业
      direction:[],    // 方向
      course:[],        // 课程
    };
  },
  methods: {
    getData() {
      this.fetchSomething();
      axios
        .get("/index")
        .then((response) => {
          let {data,meta} = response.data;
          if (meta.status == 200) {
          
            this.Slogan = data.Slogan;
            console.log(data.professional);
            this.professional = data.professional;
            this.direction = data.direction;
            this.course = data.course;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchSomething() {
      const ip = await this.$axios.$get("http://icanhazip.com");
      this.ip = ip;
    },
  },
  created() {
    this.getData();

    window.onload = () => {
      let before_scroll = 0;
      let mynav = document.getElementById("mynav");
      window.onscroll = () => {
        let after_scroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (after_scroll > before_scroll) {
          mynav.style =
            " height:3em; width:100%; background:#000000; color:#FFFFFF; position:fixed; top:-3em;left:0; transition:0.5s;";
        } else {
          mynav.style =
            " height:3em; width:100%; background:#000000; color:#FFFFFF; position:fixed; top:0;left:0; transition:0.5s;";
        }
        before_scroll = after_scroll;
      };
    };
  },
};
</script>
  
  <style>
* {
  margin: 0%;
  padding: 0%;
  list-style: none;
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
html,
body {
  scroll-behavior: smooth;
  width: 100%;
}
body {
  background-image: linear-gradient(#0f1e3b, #b98e8e);
}

#mynav {
  height: 3em;
  width: 100%;
  background: #000000;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  box-shadow: 0 0.3em 0.5em #00000075;
}

#navmain {
  max-width: 130em;
  margin: 1em auto 0em auto;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
}

#logo {
  flex: 0 0 100px;
}
#introbox {
  height: 500px;
  max-width: 130em;
  margin: auto;
  padding: 4em;
}
#intro {
  background-image: linear-gradient(150deg, #ff000000, #ff000050);
  width: 100%;
  height: 100%;
  border-radius: 1em;
}

#courses {
  max-width: 130em;
  margin: auto;
  height: 900px;
  background-color: azure;
}

.ProfessionalTitle {
  font-size: 40px;
  text-align: center;
}

</style>
  
<template>
  <div>
    <div class="salon_container">
      <div class="salon_img_container">
        <h1>性別沙龍</h1>
        <img src="../../../assets/activity/activity.png" />
      </div>
      <div class="salon_content_container">
        <div class="salon_content_new">
          最新活動
          <a> {{ newlyActivity.title }} </a>
        </div>
        <div class="salon_content_old">
          歷史活動
        </div>
        <div v-for="activity in oldActivities" :key="activity.ID">
          {{ activity.title }}
        </div>
      </div>
    </div>

    <div class="class_container">
      <div class="class_content_container">
        <div class="class_content_new">
          最新活動
          <a> {{ newlyCourse.title }} </a>
        </div>

        <div class="class_content_old">
          歷史活動
        </div>
        <div v-for="course in oldCourses" :key="course.ID">
          {{ course.title }}
        </div>
      </div>
      <div class="class_img_container">
        <h1>課程／工作坊</h1>
        <img src="../../../assets/activity/course.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from "../../api/index";

export default {
  async mounted() {
    await getPosts({
      number: 10,
      category: "活動報報"
    }).then(response => {
      this.activities = response.data.posts;
    });
    await getPosts({
      number: 10,
      category: "課程或工作坊"
    }).then(response => {
      this.courses = response.data.posts;
    });
  },
  computed: {
    newlyActivity() {
      return this.activities.length > 0 ? this.activities[0] : null;
    },
    oldActivities() {
      return this.activities.length > 1
        ? this.activities.slice(1, this.activities.length)
        : [];
    },
    newlyCourse() {
      return this.courses.length > 0 ? this.courses[0] : null;
    },
    oldCourses() {
      return this.courses.length > 1
        ? this.courses.slice(1, this.courses.length)
        : [];
    }
  },
  data() {
    return {
      activities: [],
      courses: []
    };
  }
};
</script>

<style scope>
.salon_container,
.class_container {
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  /* border: 1px solid red; */
}

.salon_img_container {
  width: 30%;
  text-align: center;
}

.salon_content_container {
  width: 70%;
}

.salon_content_new {
  width: 70%;
  border-radius: 20px;
  padding-left: 50px;
  line-height: 60px;
  font-size: 16px;
  color: #ff4b2d;
  font-weight: bold;
  background: #ffefce;
}

.salon_content_new > a {
  text-decoration: none;
  color: #2d2d2d;
}

.salon_content_old,
.class_content_old {
  margin-top: 20px;
  padding-left: 20px;
  line-height: 30px;
}

.class_content_container {
  width: 50%;
  margin-top: 40px;
}

.class_img_container {
  width: 30%;
  text-align: center;
}

.class_content_new {
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  color: #ff4b2d;
  font-weight: bold;
  background: #ffefce;
}

.class_content_new a {
  text-decoration: none;
  color: #2d2d2d;
}

.class_container {
  justify-content: flex-end;
}
</style>

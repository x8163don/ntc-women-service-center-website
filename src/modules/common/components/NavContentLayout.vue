<template>
  <div class="flex pa4">
    <div class="w-20">
      <router-view name="side"></router-view>
    </div>

    <!-- Content -->
    <div class="w-80">
      <keep-alive>
        <router-view name="content"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<template>
  <div id="baseLayout">
    <a-layout class="layout" style="min-height:100vh">
      <a-layout-header class="header">
        <a-row type="flex">
          <a-col flex="100px" class="margin">
            <router-link to="/">
              <div class="logo">
                <img :src="logo" alt=""/>
              </div>
            </router-link>
          </a-col>
          <a-col flex="auto">
            <a-menu
                theme="dark"
                mode="horizontal"
                selectable
                v-model:selectedKeys="selectedKeys"
                :style="{ lineHeight: '64px' }"
                @click="toRouter"
            >
              <a-menu-item key="/">
                <router-link to="/">首页</router-link>
              </a-menu-item>
              <a-menu-item key="/analysis">
                <router-link to="/analysis">分析</router-link>
              </a-menu-item>
              <a-menu-item key="/count">
                统计
<!--                <router-link to="/count">统计</router-link>-->
              </a-menu-item>
              <a-menu-item key="/test">
                测试
              </a-menu-item>
            </a-menu>
          </a-col>
          <!--                    <a-col>-->
          <!--                      <a-button type="primary" @click="doShowCreateModal">-->
          <!--                        <template #icon>-->
          <!--                          <CloudUploadOutlined/>-->
          <!--                        </template>-->
          <!--                        上传表情-->
          <!--                      </a-button>-->
          <!--                    </a-col>-->
        </a-row>
      </a-layout-header>
      <a-layout-content style="padding: 16px 50px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Modules ©2022 Created by Yepi
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import {CloudUploadOutlined} from '@ant-design/icons-vue';
import logo from '../assets/logo.png'
import {ref} from 'vue'
import router from "../router";

// const logo = ref(logo) //不能重复声明
const selectedKeys = ref(['/'])

const toRouter = (key) => {
  // item, key, keyPath
  router.push({
    path: key.key
  })
}

</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  height: 64px;
}

.logo > img {
  margin-right: 16px;
  height: 80%;
}
</style>

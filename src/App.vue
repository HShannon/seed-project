<template>
  <div id="app">
    <div class="slider-container">
      <el-slider
        v-model="value"
        :min="min"
        :max="max"
        :step="step"
        :marks="marks">
      </el-slider>
    </div>
  </div>
</template>
<script>
import  mock from '../mockData'
import axios from 'axios'
export default {
  name: 'app',
  data: function () {
    return {
      min: 100000,
      max: 50000000,
      step: 100000,
      value: 100000,
      marks: {
        100000: '10万',
        10000000: '1000万',
        20000000: '2000万',
        30000000: '3000万',
        40000000: '4000万',
        50000000: '5000万',
      }
    }
  },
  components: {
  },
  mounted: function () {  
    axios.get('/api/products').then(res => {
    }).catch(e => {
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slider-container {
  width: 300px;
  margin: 200px;
}
</style>

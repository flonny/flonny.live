<template>
  <div>
    <div class="entity-list-header">共有{{typeEntity.length}}个</div>
    <div class="entity-list">
      <div class="entity-list-item" v-for="item in typeEntity">
        <div>
          <span v-html="getOneEnity(item.value)"></span>
          <span>{{item.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import entityData from './entityData';
export default {
  name: 'Entity',
  props: {
    entitytype: {
      type: String,
      default: '',
      validator: function(value) {
        return ['math', 'text', 'mixed', 'unknown', ''].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      entityData
    };
  },
  computed: {
    typeEntity() {
      return this.entityData.filter(item => item.type === this.entitytype);
    }
  },
  methods: {
    getOneEnity(value) {
      const enityStr = value.split(' ')[0];
      if (enityStr.split('.').length > 1) {
        return `&${enityStr.split('.')[1]};`;
      }
      return `&${enityStr};`;
    }
  }
};
</script>
<style scoped>
.entity-list-header {
  padding: 10px 0;
}
.entity-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  border: 0px solid #ddd;
  border-left-width: 1px;
  border-top-width: 1px;
}
.entity-list-item {
  box-sizing: border-box;
  border: 0px solid #ddd;
  border-right-width: 1px;
  border-bottom-width: 1px;
  min-width: 25%;
  max-width: 25%;
}
.entity-list-item > div {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
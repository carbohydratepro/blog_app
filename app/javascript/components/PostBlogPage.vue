<template>
  <a-typography-title :level="2">投稿</a-typography-title>
  <a-card>
    <a-form
      ref="formRef"
      name="postBlog"
      hide-required-mark="true"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @validate="handleValidate"
      @submit.prevent="onSubmit"
    >

      <a-form-item
        has-feedback
        label="タイトル"
        name="title"
      >
        <a-input v-model:value="formState.title" autocomplete="off" />
      </a-form-item>

      <a-form-item
        has-feedback
        label="内容"
        name="body"
      >
        <a-select v-model:value="formState.body" autocomplete="off" >
        </a-select>
      </a-form-item>


      <a-form-item :wrapper-col="{ offset: 8, span: 8 }">
        <a-button type="primary" html-type="submit" :disabled="!formState.validate">投稿</a-button>
      </a-form-item>

    </a-form>
  </a-card>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import axios from 'axios';
import { message } from 'ant-design-vue';

export default defineComponent({
  name: "postBlog",
  setup() {
    const formRef = ref();
    const formState = reactive({
      title: '',
      body: '',
      validate: false
    });

    let validStatus = {
      title: false,
      body: false
    };

    let validateTitle = async (_rules, value) => {
      if (!value) {
        return Promise.reject('タイトルを入力してください。');
      }
      return Promise.resolve();
    };

    let validateBody = async (_rules, value) => {
      if (!value) {
        return Promise.reject('内容を入力してください。');
      }
      return Promise.resolve();
    };


    const rules = {
      title: [{
        required: true,
        validator: validateTitle,
        trigger: 'change',
      }],
      author_id: [{
        required: true,
        validator: validateBody,
        trigger: 'change',
      }],
    };

    const layout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 8
      }
    };

    const handleValidate = (name, status, errorMessage) => {
      updateValidate(name, status);
    };

    let updateValidate = (name, status) => {
      validStatus[name] = status;
      console.log(validStatus[name]);

      formState.validate = true;
      for (let key in validStatus) {
        formState.validate &&= validStatus[key];
      }
    };

    let initValidate = () => {
      for (let key in validStatus) {
        validStatus[key] = false;
      }
      formState.validate = false;
    }

    const onSubmit = () => {
      axios
        .post('/blogs',{
          title: formState.title,
          body: formState.body
        })
        .then(function (response) {
          console.log(response.data);
          formRef.value.resetFields();
          message.success('投稿が完了しました。', 3);
        });
    };

    return {
      formRef,
      formState,
      rules,
      layout,
      handleValidate,
      authors,
      onSubmit,
    }
  }
})
</script>

<template>
  <div class="signup">
    <div class="header">
      <div class="left">
        <i class="el-icon-close"></i>
      </div>
      <div class="title">Join llz</div>
      <div class="right"></div>
    </div>
    <div class="signup-wrapper">
      <div class="local-container">
        <div class="logo-wrapper">
          <img src="../../assets/logo2.jpg" width="80" height="80">
        </div>
        <div class="signup-form">
          <mt-field placeholder="Username" type="text" state="success"></mt-field>
          <mt-field placeholder="Mobile" type="text" state="error"></mt-field>
          <mt-field placeholder="Password" :type="passwordType" state="warning">
            <i class="el-icon-view" @click="showPwd()"></i>
          </mt-field>
        </div>
        <div class="form-submit">
          <el-button type="primary" disabled>sign up</el-button>
        </div>
      </div>
      <div class="other-container">
        <div class="line-wrapper">
          <span class="line"></span>
          <span class="title">Other accounts</span>
          <span class="line"></span>
        </div>
        <div class="other-wrapper">
          <div class="item">
            <span class="weixin"></span>
          </div>
          <div class="item">
            <span class="weibo"></span>
          </div>
          <div class="item">
            <span class="github"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
// import { trim } from '@/utils/index'
import { Field } from 'mint-ui'

Vue.component(Field.name, Field)

export default {
  name: 'signup',
  data() {
    return {
      msg: 'this is signup component',
      passwordType: 'password',
      signupForm: {
        'username': '',
        'mobile': '',
        'password': ''
      }
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
/* reset mint-ui css */
.signup {
  .signup-form {
    .mint-cell-wrapper {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
.signup {
  .header {
    display: flex;
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    left: 0;
    top: 0;
    .left {
      flex: 0 0 40px;
      width: 60px;
      height: 40px;
      padding-right: 20px;
      line-height: 40px;
      text-align: center;
      i {
        padding: 8px;
        font-size: 24px;
        color: #666;
      }
    }
    .title {
      flex: 1;
      text-align: center;
      font-size: 24px;
      font-weight: 300;
      // color: #00e8ff;
    }
    .right {
      flex: 0 0 60px;
      width: 60px;
    }
  }
  .signup-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    .local-container {
      flex: 1;
      padding-top: 40px;
      .logo-wrapper {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        img {
          border-radius: 50%;
          border: 1px solid rgba(7, 17, 27, 0.1);
        }
      }
      .signup-form {
        margin-top: 20px;
        padding: 0 10px;
      }
      .tip {
        padding: 10px 10px;
        line-height: 14px;
        color: red;
      }
      .form-submit {
        margin-top: 20px;
        padding: 0 20px;
        button {
          width: 100%;
          min-width: 120px;
          font-size: 16px;
        }
        a {
          display: block;
          margin-top: 5px;
          color: #0366d6;
        }
      }
    }
    .other-container {
      flex: 0;
      .line-wrapper {
        display: flex;
        padding: 0 20px;
        height: 26px;
        line-height: 26px;
        .line {
          flex: 1;
          height: 14px;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        }
        .title {
          flex: 0 0 120px;
          width: 120px;
          text-align: center;
          color: #666;
        }
      }
      .other-wrapper {
        display: flex;
        margin: 10px 0;
        padding: 0 20px;
        .item {
          flex: 1;
          text-align: center;
          span {
            display: inline-block;
            width: 33px;
            height: 33px;
            // border-radius: 50%;
            background: url('./other-login-icon.png') no-repeat;
          }
          span.weibo {
            background-position: -36px 0px;
          }
          span.weibo {
            background-position: -74px 0px;
          }
          span.github {
            background-position: -186px 0px;
          }
        }
      }
    }
  }
}
</style>

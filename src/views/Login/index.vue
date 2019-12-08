<template>
    <div class="login-container">
        <div class="login-box">
            <!-- 图片 -->
            <div class="avatar_box">
                <img src="../../assets/logo.png" alt="">
            </div>
            <!-- 表单输入框 -->
            <el-form :model="form" label-width="80px" class="login_form">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                     <el-button type="primary" @click="submit">登录</el-button>
                     <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                name:'admin',
                password:'123456'
            }
        }
    },
    methods:{
        submit(){
            if(this.form.name == 'admin' && this.form.password == '123456'){
                window.sessionStorage.setItem('token','213uy231ui33213');
                this.$message.success("登录成功");
                setTimeout(()=>{
                    this.$router.push("/table");
                },1000);
            }else{
                this.$message.error('用户名或者密码有错误');
            }
        }
    }
}
</script>

<style lang="scss">
    .login-container{
        background: #2b4b6b;
        height: 100%;
        .login-box{
            width: 450px;
            height: 300px;
            background: #fff;
            border-radius: 3px;
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            .avatar_box{
                height: 130px;
                width: 130px;
                border: 1px solid #ddd;
                border-radius: 50%;
                padding: 10px;
                background: #fff;
                position: absolute;
                left: 50%;
                transform: translate(-50%,-50%);
                img{
                    width: 100%;
                    height: 100%;
                    background: #eee;
                    border-radius: 50%;
                }
            }
            .login_form{
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                .btns{
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }
</style>
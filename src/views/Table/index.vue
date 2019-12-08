<template>
    <div class="table">
        <div class="header">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input v-model="userInfo.name" placeholder="请输入姓名"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="userInfo.gender" placeholder="请输入性别"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="userInfo.phoneNum" placeholder="请输入手机号码"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-date-picker
                        v-model="userInfo.birthday"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-col>
            </el-row>
            <el-button class="add-btn" type="primary" @click="addUser()">添加信息</el-button>
        </div>
        <div class="body">
            <template>
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="序号"
                    width="180">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="gender"
                    label="性别">
                    </el-table-column>
                    <el-table-column
                    prop="phoneNum"
                    label="电话号码">
                    </el-table-column>
                    <el-table-column
                    prop="birthday"
                    label="出生日期">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" @click="editUser(scope.row,scope.$index)" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" @click="delUser(scope.$index)" circle></el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
         <!-- 回填弹出框 -->
         <el-dialog
            title="编辑用户信息"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div>
                <el-form ref="form" :model="editObj" label-width="80px">
                    <el-form-item label="姓名">
                        <el-input v-model="editObj.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-input v-model="editObj.gender"></el-input>
                    </el-form-item>  
                    <el-form-item label="电话号码">
                            <el-input v-model="editObj.phoneNum"></el-input>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-date-picker
                                v-model="editObj.birthday"
                                type="date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>  
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{
                name:'',
                gender:'',
                phoneNum:'',
                birthday:'',
            },
            tableData: [{
                name: '王福辉',
                gender:'男',
                phoneNum:'17854202420',
                birthday:'1998-01-10',
            }],
            dialogVisible:false,//默认不显示
            editObj:{
                name:'',
                gender:'',
                phoneNum:'',
                birthday:'',
            },
            userIndex:0//下标
        }
    },
    methods:{
        //添加
        addUser(){
            if(!this.userInfo.name){
                this.$message({
                    message: '请输入姓名',
                    type: 'warning'
                });
                return;
            }
            if(!this.userInfo.gender){
                this.$message({
                    message: '请输入性别',
                    type: 'warning'
                });
                return;
            }
            if(!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(this.userInfo.phoneNum)){
                this.$message({
                    message: '请输入正确的电话号码',
                    type: 'warning'
                });
                return;
            }
            if(!this.userInfo.birthday){
                this.$message({
                    message: '请输入出生日期',
                    type: 'warning'
                });
                return;
            }
            this.tableData.push(this.userInfo);
            this.userInfo={}
        },
        //删除用户信息
        delUser(idx){
            this.$confirm('确认关闭？')
            .then(_ => {
                this.tableData.splice(idx,1);
            })
            .catch(_ => {});
        },
        //编辑用户信息
        editUser(item,idx){
            this.userIndex = idx
            this.editObj = {
                name:item.name,
                gender:item.gender,
                phoneNum:item.phoneNum,
                birthday:item.birthday
            };
            this.dialogVisible = true;
        },
        handleClose(){
            this.dialogVisible = false;
        },
        confirm(){
            this.dialogVisible = false;
            Vue.set(this.tableData,this.userIndex,this.editObj);
        }
    }
}
</script>

<style>
    #app{
        width:1024px;
        margin: 0 auto;
    }
    .add-btn{
        margin-top: 20px;
        width: 100%;
    }
</style>
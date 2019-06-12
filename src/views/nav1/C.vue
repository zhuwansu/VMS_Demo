<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="loadData">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button size="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table
      :data="aData"
      class="tb-edit"
      style="width: 100%"
      highlight-current-row
      height="550"
      border
    >
      <el-table-column label="销项涉税规则维护" align="center" width="180">
        <el-table-column type="index" width="80" ></el-table-column>
        <el-table-column label="id" width="180">
          <template scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column label="公司编码" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.companyCode"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.companyCode}}</span>
          </template>
        </el-table-column>
        <el-table-column label="公司名称" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.companyName"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.companyName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="涉税规则编号" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.code"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.code}}</span>
          </template>
        </el-table-column>
        <el-table-column label="涉税规则名称" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.name"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="计税方式" width="180">
          <template scope="scope">
			  <el-select v-model="scope.row.jsfs" placeholder="请选择计税方式">
      			<el-option label="免税" value="免税" ></el-option>
      			<el-option label="一般计税"  value="一般计税" ></el-option>
      			<el-option label="简易计税" value="简易计税"  ></el-option>
    		</el-select>
            <span>{{scope.row.jsfs}}</span>
          </template>
        </el-table-column>

        <el-table-column label="是否计税" width="180">
          <template scope="scope">
			  <el-select v-model="scope.row.sfjs" placeholder="请选择是否计税">
      			<el-option label="是" value="是" ></el-option>
      			<el-option label="否"  value="否" ></el-option>
    		</el-select>
            <span>{{scope.row.sfjs}}</span>
          </template>
        </el-table-column>

        <el-table-column label="是否含税" width="180">
          <template scope="scope">
            	  <el-select v-model="scope.row.sfhs" placeholder="请选择是否含税">
      			<el-option label="是" value="是" ></el-option>
      			<el-option label="否"  value="否" ></el-option>
    		</el-select>
            <span>{{scope.row.sfhs}}</span>
          </template>
        </el-table-column>

        <el-table-column label="税率" width="180">
          <template scope="scope">
               <el-select v-model="scope.row.taxRate" placeholder="请选择税率">
      			<el-option label="0%" value="0%" ></el-option>
      			<el-option label="3%" value="3%" ></el-option>
      			<el-option label="6%" value="6%" ></el-option>
      			<el-option label="10%" value="10%" ></el-option>
      			<el-option label="16%" value="16%" ></el-option>
    		</el-select>
            <span>{{scope.row.taxRate}}</span>
          </template>
        </el-table-column>

        <el-table-column label="是否即征即退" width="180">
          <template scope="scope">
              <el-select v-model="scope.row.sfjzjt" placeholder="请选择是否即征即退">
      			<el-option label="是" value="是" ></el-option>
      			<el-option label="否"  value="否" ></el-option>
    		</el-select>
            <span>{{scope.row.sfjzjt}}</span>
          </template>
        </el-table-column>

        <el-table-column label="开票规则" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.kpgz"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.kpgz}}</span>
          </template>
        </el-table-column>

        <el-table-column label="商品及服务编码" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.goodsCode"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.goodsCode}}</span>
          </template>
        </el-table-column>

        <el-table-column label="商品及服务名称" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.goodsName"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.goodsName}}</span>
          </template>
        </el-table-column>

        <el-table-column label="纳税申报表行号" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.rowIndex"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.rowIndex}}</span>
          </template>
        </el-table-column>

        <el-table-column label="纳税申报表行名" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.tableName"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.tableName}}</span>
          </template>
        </el-table-column>

        <el-table-column label="是否启用" width="180">
          <template scope="scope">
            <el-input
              size="small"
              v-model="scope.row.isEnable"
              placeholder="请输入内容"
              @change="handleEdit(scope.$index, scope.row)"
            ></el-input>
            <span>{{scope.row.isEnable}}</span>
          </template>
        </el-table-column>
      </el-table-column>
	   <el-table-column label="操作" fixed="right">
          <template scope="scope">
            <el-button size="small" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
  </section>
</template>

<script>
import util from "../../common/js/util";
//import NProgress from 'nprogress'
import { getA, removeA, addA, editA } from "../../api/api";

export default {
  data() {
    return {
      aData: [],
      filters: {
        name: ""
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      editLoading: false
    };
  },
  methods: {
    //获取用户列表
    loadData() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      //NProgress.start();
      getA(para).then(res => {
        this.total = res.data.total;
        this.aData = res.data.list;
        this.listLoading = false;
      });
    },
    //删除
    handleDel: function(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { id: row.id };
          removeA(para).then(res => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.loadData();
          });
        })
        .catch(() => {});
    },
    handleAdd: function() {}
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
.tb-edit .el-input {
  display: none;
}
.tb-edit .el-select {
  display: none;
}
.tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-select {
  display: block;
}
.tb-edit .current-row .el-input + span {
  display: none;
}
.tb-edit .current-row .el-select + span {
  display: none;
}

</style>
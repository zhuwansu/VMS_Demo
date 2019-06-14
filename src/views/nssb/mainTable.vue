<template>
  <div class="mainTableContainer">
    <el-table :data="mainTable" style="width: 100%" :span-method="arraySpanMethod" border>
      <el-table-column label="增 值 税 纳 税 申 报 表" align="center">
        <el-table-column label="（一般纳税人适用）" header-align="center">
          <el-table-column
            header-align="left"
            label="    根据国家税收法律法规及增值税相关规定制定本表。纳税人不论有无销售额，均应按税务机关核定的纳税期限填写本表，并向当地税务机关申报。"
          >
            <el-table-column label="项     目" header-align="center"></el-table-column>
            <el-table-column label="栏次" header-align="center"></el-table-column>
            <el-table-column label="一般项目" header-align="center">
              <el-table-column label="本月数" header-align="center"></el-table-column>
              <el-table-column label="本年累计" header-align="center"></el-table-column>
            </el-table-column>
            <el-table-column label="即征即退项目" header-align="center">
              <el-table-column label="本月数" header-align="center"></el-table-column>
              <el-table-column label="本年累计" header-align="center"></el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      mainTable: []
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    }
  }
};
</script>

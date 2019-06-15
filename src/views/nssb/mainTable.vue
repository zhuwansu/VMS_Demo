<template>
  <div class="mainTableContainer">
    <el-table :data="mainTable" style="width: 100%" :span-method="objectSpanMethod" border>
      <el-table-column label="增 值 税 纳 税 申 报 表" align="center">
        <el-table-column label-class-name="font12" label="（一般纳税人适用）" header-align="center">
          <el-table-column
            header-align="left"
            label-class-name="font10 color999"
            label="    根据国家税收法律法规及增值税相关规定制定本表。纳税人不论有无销售额，均应按税务机关核定的纳税期限填写本表，并向当地税务机关申报。"
          >
            <el-table-column label="项     目" header-align="center">
              <el-table-column width="40px">
                <template slot-scope="scope">
                  <div style="width: 14px;font-size:14px;word-wrap:break-word;letter-spacing:20px; ">{{ scope.row.itemType }}</div>
                </template>
              </el-table-column>

              <el-table-column>
                <template slot-scope="scope">
                  <el-popover
                    v-if="scope.row.titles&&scope.row.titles.length>0"
                    trigger="hover"
                    placement="right"
                  >
                    <div>
                      <p v-for="title in  scope.row.titles" :key="title">{{title}}</p>
                    </div>
                    <div slot="reference">
                      <el-badge is-dot class="hasTitle">{{ scope.row.item }}</el-badge>
                    </div>
                  </el-popover>
                  <div v-else style="white-space:pre;">{{ scope.row.item }}</div>
                </template>
              </el-table-column>
            </el-table-column>
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
  data() {
    return {
      mainTable: [
        {
          itemType: "销售额",
          item: "（一）按适用税率计税销售额",
          titles: [
            `第1栏“（一）按适用税率征税销售额”：填写纳税人本期按一般计税方法计算缴纳增值税的销售额 ，包含：`,
            ``,
            `在财务上不作销售但按税法规定应缴纳增值税的视同销售和价外费用的销售额；外贸企业作价销售进料加工复出口货物的销售额；税务、财政、审计部门检查后按一般计税方法计算调整的销售额 。`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产有扣除项目的，应填写扣除之前的不含税销售额。`,
            ``,
            `第2、3栏的“其中”与第1栏无完全对映关系，“服务、不动产和无形资产”销售额不包括在其中。`
          ]
        },
        {
          item: "其中：应税货物销售额",
          titles: [
            `填写纳税人本期按适用税率计算增值税的应税货物的销售额。`,
            `包含在财务上不作销售但按税法规定应缴纳增值税的视同销售货物和价外费用销售额，以及外贸企业作价销售进料加工复出口货物的销售额。`
          ]
        },
        {
          item: "           应税劳务销售额"
        },
        {
          item: "           纳税检查调整的销售额"
        },
        {
          item: "（二）按简易办法计税销售额"
        },
        {
          item: "其中：纳税检查调整的销售额"
        },
        {
          item: "（三）免、抵、退办法出口销售额"
        },
        {
          item: "（四）免税销售额"
        },
        {
          item: "其中：免税货物销售额"
        },
        {
          item: "           免税劳务销售额"
        }
      ]
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      debugger;
      if (columnIndex == 0) {
        if (rowIndex == 0) {
          return {
            rowspan: 10,
            colspan: 1
          };
        } else if(rowIndex<=9) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>
<style type="css" >
.font12 {
  font-size: 12px;
}
.font10 {
  font-size: 10px;
  color: #999;
}
.el-table__footer-wrapper thead div,
.el-table__header-wrapper thead div.color999 {
  color: #999;
}
.hasTitle {
  margin-top: 10px;
  margin-right: 40px;
}
</style>


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
                  <div
                    style="width: 14px;font-size:14px;word-wrap:break-word;letter-spacing:20px; "
                  >{{ scope.row.itemType }}</div>
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
        },
        {
          itemType: "税款计算",
          item: "销项税额"
        },
        {
          item: "进项税额"
        },
        {
          item: "上期留抵税额"
        },
        {
          item: "进项税额转出"
        },
        {
          item: "免、抵、退应退税额"
        },
        {
          item: "按适用税率计算的纳税检查应补缴税额"
        },
        {
          item: "应抵扣税额合计"
        },
        {
          item: "实际抵扣税额"
        },
        {
          item: "应纳税额"
        },
        {
          item: "期末留抵税额"
        },
        {
          item: "简易计税办法计算的应纳税额"
        },
        {
          item: "按简易计税办法计算的纳税检查应补缴税额"
        },
        {
          item: "应纳税额减征额"
        },
        {
          item: "应纳税额合计"
        },
        {
          itemType: "税款缴纳",
          item: "期初未缴税额（多缴为负数）"
        },
        { item: "实收出口开具专用缴款书退税额" },
        { item: "本期已缴税额" },
        { item: "①分次预缴税额" },
        { item: "②出口开具专用缴款书预缴税额" },
        { item: "③本期缴纳上期应纳税额" },
        { item: "④本期缴纳欠缴税额" },
        { item: "期末未缴税额（多缴为负数）" },
        { item: "其中：欠缴税额（≥0）" },
        { item: "本期应补(退)税额" },
        { item: "即征即退实际退税额" },
        { item: "期初未缴查补税额" },
        { item: "本期入库查补税额" },
        { item: "期末未缴查补税额" },
        {
          itemType: "授权声明",
          item: "      如果你已委托代理人申报，请填写下列资料："
        },
        {
          item:
            "      为代理一切税务事宜，现授权                                                                "
        },
        {
          item:
            "（地址）                                             为本纳税人的代理申报人，任何与本"
        },
        { item: "申报表有关的往来文件，都可寄予此人。" },
        { item: "" },
        {
          item:
            "                                                                                授权人签字："
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
        } else if (rowIndex == 10) {
          return {
            rowspan: 14,
            colspan: 1
          };
        } else if (rowIndex == 24) {
          return {
            rowspan: 14,
            colspan: 1
          };
        } else if (rowIndex == 38) {
          return {
            rowspan: 7,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
      if (columnIndex == 1) {
        switch (rowIndex) {
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
            return {
              rowspan: 1,
              colspan: 3
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


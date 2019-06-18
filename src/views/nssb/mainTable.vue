<template>
  <div class="mainTableContainer">
    <div class="table-nav">
      <el-link>xx 公司</el-link>
      <el-link type="primary">主表</el-link>
      <el-link type="primary">附表一</el-link>
      <el-link type="primary">附表二</el-link>
      <el-link type="primary">附表三</el-link>
      <el-link type="primary">附表四</el-link>
    </div>
    <el-table
      :data="mainTable"
      style="width: 100%"
      :span-method="objectSpanMethod"
      border
      highlight-current-row
      class="tb-edit"
      :row-class-name="rowClass"
    >
      <el-table-column label="增 值 税 纳 税 申 报 表" align="center">
        <el-table-column label-class-name="font12" label="（一般纳税人适用）" header-align="center">
          <el-table-column
            header-align="left"
            label-class-name="font10 color999"
            label="    根据国家税收法律法规及增值税相关规定制定本表。纳税人不论有无销售额，均应按税务机关核定的纳税期限填写本表，并向当地税务机关申报。"
          >
            <el-table-column label="项     目" header-align="center">
              <el-table-column width="40px" align="center">
                <template slot-scope="scope">
                  <div
                    style="width: 14px;font-size:14px;word-wrap:break-word;letter-spacing:20px;"
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
            <el-table-column label="栏次" header-align="center" prop="lc"></el-table-column>
            <el-table-column label="一般项目" header-align="center">
              <el-table-column label="本月数" header-align="center">
                <template scope="scope">
                  <el-input
                    size="small"
                    :disabled="isDisable(scope.row)"
                    :change="inputChange(scope.row,scope.row.a1)"
                    v-model="scope.row.a1"
                    placeholder="请输入一般项目本月数"
                  ></el-input>
                  <span>{{scope.row.a1}}</span>
                </template>
              </el-table-column>
              <el-table-column label="本年累计" header-align="center">
                <template scope="scope">
                  <el-input
                    size="small"
                    :disabled="isDisable(scope.row)"
                    :change="inputChange(scope.row,scope.row.a1)"
                    v-model="scope.row.a2"
                    placeholder="请输入一般项目本年累计"
                  ></el-input>
                  <span>{{scope.row.a2}}</span>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="即征即退项目" header-align="center">
              <el-table-column label="本月数" header-align="center">
                <template scope="scope">
                  <el-input
                    size="small"
                    :disabled="isDisable(scope.row)"
                    :change="inputChange(scope.row,scope.row.a1)"
                    v-model="scope.row.b1"
                    placeholder="请输入即征即退项目本月数"
                  ></el-input>
                  <span>{{scope.row.b1}}</span>
                </template>
              </el-table-column>
              <el-table-column label="本年累计" header-align="center">
                <template scope="scope">
                  <el-input
                    size="small"
                    :disabled="isDisable(scope.row)"
                    :change="inputChange(scope.row,scope.row.a1)"
                    v-model="scope.row.b2"
                    placeholder="请输入即征即退项目本年累计"
                  ></el-input>
                  <span>{{scope.row.b2}}</span>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <p class="can-space">主管税务机关： 接收人：</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainTable: [
        {
          lc: 1,
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
          lc: 2,
          item: "其中：应税货物销售额",
          titles: [
            `填写纳税人本期按适用税率计算增值税的应税货物的销售额。`,
            `包含在财务上不作销售但按税法规定应缴纳增值税的视同销售货物和价外费用销售额，以及外贸企业作价销售进料加工复出口货物的销售额。`
          ]
        },
        {
          lc: 3,
          item: "           应税劳务销售额"
        },
        {
          lc: 4,
          item: "           纳税检查调整的销售额",
          titles: [
            `填写纳税人因税务、财政、审计部门检查，并按一般计税方法在本期计算调整的销售额。`,
            ``,
            `享受增值税即征即退政策的货物、劳务和服务、不动产、无形资产，经纳税检查属于偷税的，不填入“即征即退项目”列，而应填入“一般项目”列。`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产有扣除项目的，本栏应填写扣除之前的不含税销售额。`
          ]
        },
        {
          lc: 5,
          item: "（二）按简易办法计税销售额",
          titles: [
            `填写纳税人本期按简易计税方法计算增值税的销售额。包含纳税检查调整按简易计税方法计算增值税销售额。`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产有扣除项目的，本栏应填写扣除之前的不含税销售额；`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产按规定汇总计算缴纳增值税的分支机构，其当期按预征率计算缴纳增值税的销售额也填入本栏。`
          ]
        },
        {
          lc: 6,
          item: "其中：纳税检查调整的销售额",
          titles: [
            `纳税检查调整的销售额”：填写纳税人因税务、财政、审计部门检查，并按简易计税方法在本期计算调整的销售额。`,
            `享受增值税即征即退政策的货物、劳务和服务、不动产、无形资产，经纳税检查发现偷税的，不填入“即征即退项目”列，应填入“一般项目”列。`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产有扣除项目的，应填写扣除之前的不含税销售额。`
          ]
        },
        {
          lc: 7,
          item: "（三）免、抵、退办法出口销售额",
          titles: [
            `“免、抵、退办法出口销售额”：填写纳税人本期适用免、抵、退税办法的出口货物、劳务和服务、无形资产的销售额。`
          ]
        },
        {
          lc: 8,
          item: "（四）免税销售额",
          titles: [
            `“免税销售额”：填写纳税人本期按照税法规定免征增值税的销售额和适用零税率的销售额，但零税率的销售额中不包括适用免、抵、退税办法的销售额。`,
            ``,
            `第9、10栏的“其中”与第8栏无完全对映关系，“免税服务、不动产和无形资产销售额”不包括在其中。`
          ]
        },
        {
          lc: 9,
          item: "其中：免税货物销售额"
        },
        {
          lc: 10,
          item: "           免税劳务销售额"
        },
        {
          lc: 11,
          itemType: "税款计算",
          item: "销项税额",
          titles: [
            `填写纳税人本期按一般计税方法计税的货物、劳务和服务、不动产、无形资产的销项税。`,
            ``,
            `“营改增”纳税人，服务、不动产、无形资产有扣除项目的，本栏应填写扣除之后的销项税额。`
          ]
        },
        {
          lc: 12,
          item: "进项税额",
          titles: [
            `“一般项目”列“本月数”+“即征即退项目”列“本月数”＝《附表（二）》第12栏“税额”。`
          ]
        },
        {
          lc: 13,
          item: "上期留抵税额",
          titles: [
            `无须“挂账”留抵的纳税人，按以下要求填写本栏“本月数”和“本年累计”：（需“挂账”情况将在后面专题说明）`,
            `本栏“一般项目”列“本月数”：按上期申报表第20栏“期末留抵税额”“一般项目”列“本月数”填写。`,
            `本栏“即征即退项目”列“本月数”：按上期申报表第20栏“期末留抵税额”“即征即退项目”列“本月数”填写。 `,
            `本栏“一般项目”列“本年累计”：填写“0”`
          ]
        },
        {
          lc: 14,
          item: "进项税额转出"
        },
        {
          lc: 15,
          item: "免、抵、退应退税额",
          titles: [
            `反映税务机关退税部门按照出口货物、劳务和服务、无形资产免、抵、退办法审批的增值税应退税额。`
          ]
        },
        {
          lc: 16,
          item: "按适用税率计算的纳税检查应补缴税额"
        },
        {
          lc: "17=12+13-14-15+16",
          item: "应抵扣税额合计"
        },
        {
          lc: `18（如17<11，则为17，否则为11）`,
          item: "实际抵扣税额",
          titles: [
            `“实际抵扣税额”，无须挂账留抵的纳税人，按以下要求填写本栏“本月数”和“本年累计”：`,
            ``,
            `本栏“一般项目”列“本月数”：按表中所列公式计算填写。 （“应抵扣税额”与“销项税额”对比，谁小扣谁）`,
            `本栏“即征即退项目”列“本月数”：按表中所列公式计算填写。`,
            `本栏“一般项目”列“本年累计”：填写“0” `
          ]
        },
        {
          lc: `19=11-18`,
          item: "应纳税额"
        },
        {
          lc: `20=17-18`,
          item: "期末留抵税额"
        },
        {
          lc: 21,
          item: "简易计税办法计算的应纳税额",
          titles: [
            `反映纳税人本期按简易计税方法计算并应缴纳的增值税额，但不包括纳税检查应补缴税额。`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产按规定汇总计算缴纳增值税的分支机构，应将预征增值税额填入本栏。预征增值税额=应预征增值税的销售额×预征率。`
          ]
        },
        {
          lc: 22,
          item: "按简易计税办法计算的纳税检查应补缴税额"
        },
        {
          lc: 23,
          item: "应纳税额减征额",
          titles: [
            `填写纳税人本期按照税法规定减征的增值税应纳税额。包含按照规定可在增值税应纳税额中全额抵减的增值税税控系统专用设备费用以及技术维护费。`,
            ``,
            `当本期减征额小于或等于第19栏“应纳税额”与第21栏“简易计税办法计算的应纳税额”之和时，按本期减征额实际填写；`,
            `当本期减征额大于第19栏“应纳税额”与第21栏“简易计税办法计算的应纳税额”之和时，按本期第19栏与第21栏之和填写。本期减征额不足抵减部分结转下期继续抵减。`
          ]
        },
        {
          lc: `24=19+21-23`,
          item: "应纳税额合计"
        },
        {
          lc: 25,
          itemType: "税款缴纳",
          item: "期初未缴税额（多缴为负数）",
          titles: [
            `“期初未缴税额（多缴为负数）”：“本月数”按上一税款所属期申报表第32栏“期末未缴税额（多缴为负数）”“本月数”填写。`,
            ` “本年累计”按上年度最后一个税款所属期申报表第32栏“期末未缴税额（多缴为负数）”“本年累计”填写。`
          ]
        },
        { lc: 26, item: "实收出口开具专用缴款书退税额" },
        {
          lc: `27=28+29+30+31`,
          item: "本期已缴税额",
          titles: [
            `反映纳税人本期实际缴纳的增值税额，但不包括本期入库的查补税款。按表中所列公式计算填写。`
          ]
        },
        {
          lc: 28,
          item: "①分次预缴税额",
          titles: [
            `填写纳税人本期已缴纳的准予在本期应纳税额中抵减的税额。`,
            ``,
            `“营改增”纳税人，服务、不动产和无形资产按规定汇总计算缴纳增值税的总机构，其可以从本期增值税应纳税额中抵减的分支机构已缴纳的税款;`,
            `销售建筑服务并按规定预缴增值税的纳税人，其可以从本期增值税应纳税额中抵减的已缴纳的税款;`,
            `销售、出租不动产并按规定预缴增值税的纳税人，其可以从本期增值税应纳税额中抵减的已缴纳的税款，按当期实际可抵减数填入本栏，不足抵减部分结转下期继续抵减。`
          ]
        },
        { lc: 29, item: "②出口开具专用缴款书预缴税额" },
        { lc: 30, item: "③本期缴纳上期应纳税额" },
        {
          lc: 31,
          item: "④本期缴纳欠缴税额",
          titles: [
            `反映纳税人本期实际缴纳和留抵税额抵减的增值税欠税额，但不包括缴纳入库的查补增值税额。`
          ]
        },
        {
          lc: `32=24+25+26-27`,
          item: "期末未缴税额（多缴为负数）",
          titles: [
            `“本月数”反映纳税人本期期末应缴未缴的增值税额，但不包括纳税检查应缴未缴的税额。按表中所列公式计算填写。“本年累计”与“本月数”相同。`
          ]
        },
        {
          lc: `33=25+26-27`,
          item: "其中：欠缴税额（≥0）",
          titles: [
            `反映纳税人按照税法规定已形成欠税的增值税额。按表中所列公式计算填写。`
          ]
        },
        {
          lc: `34＝24-28-29`,
          item: "本期应补(退)税额",
          titles: [
            `反映纳税人本期应纳税额中应补缴或应退回的数额。按表中所列公式计算填写。`
          ]
        },
        { lc: 35, item: "即征即退实际退税额" },
        {
          lc: 36,
          item: "期初未缴查补税额",
          titles: [
            `“本月数”按上一税款所属期申报表第38栏“期末未缴查补税额”“本月数”填写。“本年累计”按上年度最后一个税款所属期申报表第38栏“期末未缴查补税额”“本年累计”填写。`
          ]
        },
        {
          lc: 37,
          item: "本期入库查补税额",
          titles: [
            `反映纳税人本期因税务、财政、审计部门检查而实际入库的增值税额，包括按一般计税方法计算并实际缴纳的查补增值税额和按简易计税方法计算并实际缴纳的查补增值税额。 `
          ]
        },
        {
          lc: `38=16+22+36-37`,
          item: "期末未缴查补税额",
          titles: [
            `“本月数”反映纳税人接受纳税检查后应在本期期末缴纳而未缴纳的查补增值税额。按表中所列公式计算填写，“本年累计”与“本月数”相同。`
          ]
        },
        {
          itemType: `    
    授
    权
    声
    明        `,
          item: "      如果你已委托代理人申报，请填写下列资料：",
          a2: `
                               申
                               报
                               人
                               声
                               明        `,
          b1: ""
        },
        {
          item:
            "      为代理一切税务事宜，现授权                                                                ",
          b1:
            "   本纳税申报表是根据国家税收法律法规及相关规定填报的，我确定它是真实的、可靠的、完整的。"
        },
        {
          item:
            "（地址）                                             为本纳税人的代理申报人，任何与本",
          b1: ""
        },
        { item: "申报表有关的往来文件，都可寄予此人。", b1: "" },
        { item: "", b1: "" },
        {
          item:
            "                                                                                授权人签字：",
          b1:
            "                                                                           声明人签字："
        }
      ]
    };
  },
  methods: {
    inputChange(row, value) {
      let lc = parseInt(row.lc);
      let map = [
        {
          lc: "17",
          lcs: [12, 13, 14, 15, 16],
          handel: function(lc, v) {
            if (lc == 14 || lc == 15) {
              return -v;
            }
            return v;
          }
        },
        {
          lc: "18",
          lcs: [17, 11],
          handel: function(lc, v, total) {
            debugger;
            if (lc == 11) return v;
            if (lc == 17 && v < total) {
              return v - total;
            }
            return 0;
          }
        },
        {
          lc: "19",
          lcs: [11, 18],
          handel: function(lc, v) {
            if (lc == 18) return -v;
            return v;
          }
        },
        {
          lc: "20",
          lcs: [17, 18],
          handel: function(lc, v) {
            if (lc == 18) return -v;
            return v;
          }
        },
        {
          lc: "24",
          lcs: [19, 21, 23],
          handel: function(lc, v) {
            if (lc == 23) return -v;
            return v;
          }
        },
        {
          lc: "27",
          lcs: [28, 29, 30, 31],
          handel: function(lc, v) {
            return v;
          }
        },
        {
          lc: "32",
          lcs: [24, 25, 26, 27],
          handel: function(lc, v) {
            if (lc == 27) return -v;
            return v;
          }
        },
        {
          lc: "33",
          lcs: [25, 26, 27],
          handel: function(lc, v) {
            if (lc == 27) return -v;
            return v;
          }
        },
        {
          lc: "34",
          lcs: [24, 28, 29],
          handel: function(lc, v) {
            if (lc == 24) return v;
            return -v;
          }
        },
        {
          lc: "38",
          lcs: [16, 22, 36, 37],
          handel: function(lc, v) {
            if (lc == 37) return -v;
            return v;
          }
        }
      ];
      map.forEach(t => {
        const { lc, lcs, handel } = t;

        let toUpdate = this.mainTable.filter(m => parseInt(m.lc) == lc)[0];
        let toCompute = this.mainTable.filter(m =>
          lcs.includes(parseInt(m.lc))
        );
        let result = { a1: 0, a2: 0, b1: 0, b2: 0 };

        toCompute.forEach(m => {
          for (const ab in result) {
            if (result.hasOwnProperty(ab) && m.hasOwnProperty(ab)) {
              let v = parseInt(m[ab]);
              if (!isNaN(v)) {
                result[ab] += handel(parseInt(m.lc), v, result[ab]);
              }
            }
          }
        });

        toUpdate.a1 = result.a1;
        toUpdate.a2 = result.a2;
        toUpdate.b1 = result.b1;
        toUpdate.b2 = result.b2;
      });
    },
    isDisable(row) {
      let lc = parseInt(row.lc);
      let lcs = [17, 18, 19, 20, 24, 27, 32, 33, 34, 38];
      if (lcs.includes(lc)) {
        return true;
      }
      return false;
    },
    rowClass(row, rowIndex) {
      if (row.rowIndex >= 38) {
        return "non-edit can-space";
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
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
            rowspan: 6,
            colspan: 2
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }

      if (rowIndex == 38 && columnIndex == 4) {
        return {
          rowspan: 6,
          colspan: 1
        };
      }

      switch (rowIndex) {
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
          if (columnIndex == 1 || columnIndex == 5) {
            return {
              rowspan: 1,
              colspan: 2
            };
          } else {
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

.tb-edit .el-input {
  display: none;
}
.tb-edit .el-select {
  display: none;
}
.tb-edit .current-row:not(.non-edit) .el-input {
  display: block;
}
.tb-edit .current-row:not(.non-edit) .el-select {
  display: block;
}
.tb-edit .current-row:not(.non-edit) .el-input + span {
  display: none;
}
.tb-edit .current-row:not(.non-edit) .el-select + span {
  display: none;
}
.el-table .can-space .cell {
  white-space: pre;
}
.can-space {
  white-space: pre;
}
.table-nav {
  margin: 15px;
}
</style>

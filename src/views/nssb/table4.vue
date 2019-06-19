<template>
  <div>
    <table style id="tfhover" class="tftable" border="1">
      <tr>
        <th style="text-align:center;" colspan="8">增值税纳税申报表附列资料（四）</th>
      </tr>
      <tr>
        <th style="text-align:center;font-size: 12px;" colspan="8">（税额抵减情况表）</th>
      </tr>
      <tr>
        <td colspan="8">税款所属时间： 年 月 日 至 年 月 日</td>
      </tr>
      <tr>
        <td colspan="6">纳税人名称：（公章）</td>
        <td colspan="2">金额单位：元至角分</td>
      </tr>
      <tr>
        <td  rowspan="2" style="text-align:center;">序号</td>
        <td rowspan="2">抵减项目</td>
        <td >期初余额</td>
        <td >本期发生额</td>
        <td >本期应抵减税额</td>
        <td >本期实际抵减税额</td>
        <td colspan="2">期末余额</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3=1+2</td>
        <td>4≤3</td>
        <td colspan="2">5=3-4</td>
      </tr>
      <tr>
        <td>1</td>
        <td>增值税税控系统专用设备费及技术维护费（来源减免税明细台账）</td>
        <td><input v-model="A_1_1" /></td>
        <td><input v-model="A_1_2" /></td>
        <td>{{A_1_3}}</td>
        <td><input v-model="A_1_4" /></td>
        <td colspan="2">{{A_1_5}}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>分支机构预征缴纳税款 </td>
        <td><input v-model="A_2_1" /></td>
        <td><input v-model="A_2_2" /></td>
        <td>{{A_2_3}}</td>
        <td><input v-model="A_2_4" /></td>
        <td colspan="2">{{A_2_5}}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>建筑服务预征缴纳税款 </td>
        <td><input v-model="A_3_1" /></td>
        <td><input v-model="A_3_2" /></td>
        <td>{{A_3_3}}</td>
        <td><input v-model="A_3_4" /></td>
        <td colspan="2">{{A_3_5}}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>销售不动产预征缴纳税款 </td>
        <td><input v-model="A_4_1" /></td>
        <td><input v-model="A_4_2" /></td>
        <td>{{A_4_3}}</td>
        <td><input v-model="A_4_4" /></td>
        <td colspan="2">{{A_4_5}}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>出租不动产预征缴纳税款</td>
        <td><input v-model="A_5_1" /></td>
        <td><input v-model="A_5_2" /></td>
        <td>{{A_5_3}}</td>
        <td><input v-model="A_5_4" /></td>
        <td colspan="2">{{A_5_5}}</td>
      </tr>
      
      <tr>
        <td colspan="8">二、加计抵减情况</td>
      </tr>

<tr>
        <td  rowspan="2" style="text-align:center;">序号</td>
        <td rowspan="2">抵减项目</td>
        <td >期初余额</td>
        <td >本期发生额</td>
        <td >本期应抵减税额</td>
        <td >本期实际抵减税额</td>
        <td colspan="2">期末余额</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4=1+2-3</td>
        <td>5</td>
        <td>6=4-5</td>
      </tr>

       <tr>
        <td>6</td>
        <td>一般项目加计抵减额计算</td>
        <td><input v-model="A_6_1" /></td>
        <td><input v-model="A_6_2" /></td>
        <td><input v-model="A_6_3" /></td>
        <td>{{A_6_4}}</td>
        <td><input v-model="A_6_5" /></td>
        <td>{{A_6_6}}</td>
      </tr>

        <tr>
        <td>7</td>
        <td>即征即退项目加计抵减额计算</td>
        <td><input v-model="A_7_1" /></td>
        <td><input v-model="A_7_2" /></td>
        <td><input v-model="A_7_3" /></td>
        <td>{{A_7_4}}</td>
        <td><input v-model="A_7_5" /></td>
        <td>{{A_7_6}}</td>
      </tr>

        <tr>
        <td>8</td>
        <td>合计</td>
        <td><input v-model="A_8_1" /></td>
        <td><input v-model="A_8_2" /></td>
        <td><input v-model="A_8_3" /></td>
        <td>{{A_8_4}}</td>
        <td><input v-model="A_8_5" /></td>
        <td>{{A_8_6}}</td>
      </tr>
       
    </table>
    <br>
    <hr>
    <br>
  </div>
</template>

<script>
// onmouseout '#d4e3e5'
// onmouseover '#ffffff'
export default {
  //19*14
  data() {
    return {
A_1_1:0,	A_1_2:0,	A_1_4:0,
A_2_1:0,	A_2_2:0,	A_2_4:0,
A_3_1:0,	A_3_2:0,	A_3_4:0,
A_4_1:0,	A_4_2:0,	A_4_4:0,
A_5_1:0,	A_5_2:0,	A_5_4:0,
A_6_1:0,	A_6_2:0,	A_6_3:0,		A_6_5:0,
A_7_1:0,	A_7_2:0,	A_7_3:0,		A_7_5:0,
A_8_1:0,	A_8_2:0,	A_8_3:0,		A_8_5:0,
    };
  },
  computed: {
  A_1_3(){return +this.A_1_1 + +this.A_1_2; },
	A_2_3(){return +this.A_2_1 + +this.A_2_2;},
	A_3_3(){return +this.A_3_1 + +this.A_3_2;},
	A_4_3(){return +this.A_4_1 + +this.A_4_2;},
  A_5_3(){return +this.A_5_1 + +this.A_5_2;},
  A_1_5(){return +this.A_1_3 - +this.A_1_4;},
	A_2_5(){return +this.A_2_3 - +this.A_2_4;},
	A_3_5(){return +this.A_3_3 - +this.A_3_4;},
	A_4_5(){return +this.A_4_3 - +this.A_4_4;},
  A_5_5(){return +this.A_5_3 - +this.A_5_4;},
A_6_6(){return +this.A_6_4 - +this.A_6_5; },
A_7_6(){return +this.A_7_4 - +this.A_7_5; },
A_8_6(){return +this.A_8_4 - +this.A_8_5; },
A_6_4(){return +this.A_6_1 + +this.A_6_2+ +this.A_6_3; },
A_7_4(){return +this.A_7_1 + +this.A_7_2+ +this.A_7_3; },
A_8_4(){return +this.A_8_1 + +this.A_8_2+ +this.A_8_3; },
  },
  methods: {}
};
</script>
<style scoped>
table.tftable {
  font-size: 12px;
  color: #333333;
  width: 100%;
  border-width: 1px;
  border-color: #729ea5;
  border-collapse: collapse;
}
table.tftable th {
  font-size: 12px;
  background-color: #acc8cc;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #729ea5;
  text-align: left;
}
table.tftable tr {
  background-color: #d4e3e5;
}
table.tftable td {
  font-size: 12px;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #729ea5;
}

input {
  width: 80px;
}
</style>
 
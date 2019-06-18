<template>
  <div>
    <table id="tfhover" class="tftable" border="1">
      <tr>
        <th colspan="18">增值税纳税申报表附列资料（一）</th>
      </tr>
      <tr>
        <th colspan="18">（本期销售情况明细）</th>
      </tr>
      <tr>
        <th colspan="18">税款所属时间： 年 月 日 至 年 月 日</th>
      </tr>
      <tr>
        <td colspan="18">纳税人名称：（公章）</td>
      </tr>
      <tr>
        <td rowspan="3" colspan="4">项目及栏次</td>
        <td colspan="2"></td>
        <td colspan="2">开具其他发票</td>
        <td colspan="2">未开具发票</td>
        <td colspan="2">纳税检查调整</td>
        <td colspan="3">合计</td>
        <td rowspan="2">服务、不动产和无形资产扣除项目本期实际扣除金额</td>
        <td>扣除后</td>
        <td></td>
      </tr>
      <tr>
        <td>销售额</td>
        <td>销项(应纳)税额</td>
        <td>销售额</td>
        <td>销项(应纳)税额</td>
        <td>销售额</td>
        <td>销项(应纳)税额</td>
        <td>销售额</td>
        <td>销项(应纳)税额</td>
        <td>销售额 I（总销售收入销售额+纳税检查+视同销售）</td>
        <td>销项(应纳)税额</td>
        <td>价税合计</td>
        <td>13</td>
        <td>14</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9=1+3+5+7</td>
        <td>10=2+4+6+8</td>
        <td>11=9+10</td>
        <td>12</td>
        <td>13=11-12</td>
        <td>14=13÷(100%+税率或征收率)×税率或征收率</td>
      </tr>
      <tr>
        <td rowspan="7">一、一般计税方法计税</td>
        <td rowspan="5">全部征税项目</td>
        <td>13%税率的货物及加工修理修配劳务</td>
        <td>1</td>
        <td>
          <input v-model="A1">
        </td>
      </tr>
      <tr>
        <td>13%税率的服务、不动产和无形资产</td>
        <td>2</td>
        <td>
          <input v-model="A2">
        </td>
      </tr>
      <tr>
        <td>9%税率的货物及加工修理修配劳务</td>
        <td>3</td>
        <td>
        <input v-model="A3">
        </td>
      </tr>
      <tr>
        <td>9%税率的服务、不动产和无形资产</td>
        <td>4</td>
        <td>
          <input v-model="A4">

        </td>
      </tr>
      <tr>
        <td>6%税率</td>
        <td>5</td>
        <td>
          <input v-model="A5">

        </td>
      </tr>
      <tr>
        <td rowspan="2">其中：即征即退项目</td>
        <td>即征即退货物及加工修理修配劳务</td>
        <td>6</td>
        <td>
          <input v-model="A6">

        </td>
      </tr>
      <tr>
        <td>即征即退服务、不动产和无形资产</td>
        <td>7</td>
        <td>
         <input v-model="A7">

        </td>
      </tr>

      <tr>
        <td rowspan="11">二、简易计税方法计税</td>
        <td rowspan="9">全部征税项目</td>
        <td>6%征收率</td>
        <td>8</td>
        <td>
          <input v-model="A8">

        </td>
      </tr>

      <tr>
        <td>5%征收率的货物及加工修理修配劳务</td>
        <td>9a</td>
        <td>
         <input v-model="A9a">
        </td>
      </tr>

      <tr>
        <td>5%征收率的服务、不动产和无形资产</td>
        <td>9b</td>
        <td>
          <input v-model="A9b">

        </td>
      </tr>

      <tr>
        <td>4%征收率</td>
        <td>10</td>
        <td>
          <input v-model="A10">


        </td>
      </tr>

      <tr>
        <td>3%征收率的货物及加工修理修配劳务</td>
        <td>11</td>
        <td>
          <input v-model="A11">

        </td>
      </tr>

      <tr>
        <td>3%征收率的服务、不动产和无形资产</td>
        <td>12</td>
        <td>
          <input v-model="A12">

        </td>
      </tr>

      <tr>
        <td>预征率 %</td>
        <td>13a</td>
        <td>
         <input v-model="A13a">

        </td>
      </tr>

      <tr>
        <td>预征率 %</td>
        <td>13b</td>
        <td>
          <input v-model="A13b">

        </td>
      </tr>

      <tr>
        <td>预征率 %</td>
        <td>13c</td>
        <td>
         <input v-model="A13c">

        </td>
      </tr>

      <tr>
        <td rowspan="2">其中：即征即退项目</td>
        <td>即征即退货物及加工修理修配劳务</td>
        <td>14</td>
        <td>
          <input v-model="A14">

        </td>
      </tr>

      <tr>
        <td>即征即退服务、不动产和无形资产</td>
        <td>15</td>
        <td>
         <input v-model="A15">

        </td>
      </tr>

      <tr>
        <td rowspan="2">三、免抵退税</td>
        <td>货物及加工修理修配劳务</td>
        <td> </td>
        <td>16</td>
        <td> <input v-model="A16">
</td>
      </tr>
      <tr>
        <td>服务、不动产和无形资产</td>
        <td> </td>
       <td>17</td>
        <td> <input v-model="A17"></td>
        
      </tr>
      <tr>
        <td rowspan="2">四、免税</td>
        <td>货物及加工修理修配劳务</td>
        <td> </td>
        <td>18</td>
        <td> <input v-model="A18"></td>
        
      </tr>
      <tr>
        <td>服务、不动产和无形资产</td>
        <td> </td>
        <td>19</td>
        <td><input v-model="A19"></td>
      </tr>
    </table>
  </div>
</template>

<script>
// onmouseout '#d4e3e5'
// onmouseover '#ffffff'
export default {
  //19*14
  data() {
    return {
A1:0,	A2:0,	A3:0,	A4:0,	A5:0,	A6:0,	A7:0,	A8:0,	A9:0,	A10:0,	A11:0,	A12:0,	A13:0,	A14:0,
B1:0,	B2:0,	B3:0,	B4:0,	B5:0,	B6:0,	B7:0,	B8:0,	B9:0,	B10:0,	B11:0,	B12:0,	B13:0,	B14:0,
C1:0,	C2:0,	C3:0,	C4:0,	C5:0,	C6:0,	C7:0,	C8:0,	C9:0,	C10:0,	C11:0,	C12:0,	C13:0,	C14:0,
D1:0,	D2:0,	D3:0,	D4:0,	D5:0,	D6:0,	D7:0,	D8:0,	D9:0,	D10:0,	D11:0,	D12:0,	D13:0,	D14:0,
E1:0,	E2:0,	E3:0,	E4:0,	E5:0,	E6:0,	E7:0,	E8:0,	E9:0,	E10:0,	E11:0,	E12:0,	E13:0,	E14:0,
F1:0,	F2:0,	F3:0,	F4:0,	F5:0,	F6:0,	F7:0,	F8:0,	F9:0,	F10:0,	F11:0,	F12:0,	F13:0,	F14:0,
G1:0,	G2:0,	G3:0,	G4:0,	G5:0,	G6:0,	G7:0,	G8:0,	G9:0,	G10:0,	G11:0,	G12:0,	G13:0,	G14:0,
H1:0,	H2:0,	H3:0,	H4:0,	H5:0,	H6:0,	H7:0,	H8:0,	H9:0,	H10:0,	H11:0,	H12:0,	H13:0,	H14:0,
I1:0,	I2:0,	I3:0,	I4:0,	I5:0,	I6:0,	I7:0,	I8:0,	I9:0,	I10:0,	I11:0,	I12:0,	I13:0,	I14:0,
J1:0,	J2:0,	J3:0,	J4:0,	J5:0,	J6:0,	J7:0,	J8:0,	J9:0,	J10:0,	J11:0,	J12:0,	J13:0,	J14:0,
K1:0,	K2:0,	K3:0,	K4:0,	K5:0,	K6:0,	K7:0,	K8:0,	K9:0,	K10:0,	K11:0,	K12:0,	K13:0,	K14:0,
L1:0,	L2:0,	L3:0,	L4:0,	L5:0,	L6:0,	L7:0,	L8:0,	L9:0,	L10:0,	L11:0,	L12:0,	L13:0,	L14:0,
M1:0,	M2:0,	M3:0,	M4:0,	M5:0,	M6:0,	M7:0,	M8:0,	M9:0,	M10:0,	M11:0,	M12:0,	M13:0,	M14:0,
N1:0,	N2:0,	N3:0,	N4:0,	N5:0,	N6:0,	N7:0,	N8:0,	N9:0,	N10:0,	N11:0,	N12:0,	N13:0,	N14:0,
O1:0,	O2:0,	O3:0,	O4:0,	O5:0,	O6:0,	O7:0,	O8:0,	O9:0,	O10:0,	O11:0,	O12:0,	O13:0,	O14:0,
P1:0,	P2:0,	P3:0,	P4:0,	P5:0,	P6:0,	P7:0,	P8:0,	P9:0,	P10:0,	P11:0,	P12:0,	P13:0,	P14:0,
Q1:0,	Q2:0,	Q3:0,	Q4:0,	Q5:0,	Q6:0,	Q7:0,	Q8:0,	Q9:0,	Q10:0,	Q11:0,	Q12:0,	Q13:0,	Q14:0,
R1:0,	R2:0,	R3:0,	R4:0,	R5:0,	R6:0,	R7:0,	R8:0,	R9:0,	R10:0,	R11:0,	R12:0,	R13:0,	R14:0,
S1:0,	S2:0,	S3:0,	S4:0,	S5:0,	S6:0,	S7:0,	S8:0,	S9:0,	S10:0,	S11:0,	S12:0,	S13:0,	S14:0,
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
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
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
</style>
 
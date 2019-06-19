<template>
  <div>
    <table id="tfhover" class="tftable" border="1">
      <tr>
        <th style="text-align:center;" colspan="18">增值税纳税申报表附列资料（一）</th>
      </tr>
      <tr>
        <th style="text-align:center;font-size: 12px;" colspan="18">（本期销售情况明细）</th>
      </tr>
      <tr>
        <td colspan="18">税款所属时间： 年 月 日 至 年 月 日</td>
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
          <input v-model="A_1_1">
        </td>
        <td>
          <input v-model="A_1_2">
        </td>
        <td>
          <input v-model="A_1_3">
        </td>
        <td>
          <input v-model="A_1_4">
        </td>
        <td>
          <input v-model="A_1_5">
        </td>
        <td>
          <input v-model="A_1_6">
        </td>
        <td>
          <input v-model="A_1_7">
        </td>
        <td>
          <input v-model="A_1_8">
        </td>
        <td>
          <input v-model="A_1_9">
        </td>
        <td>
          <input v-model="A_1_10">
        </td>
        <td>
          <input v-model="A_1_11">
        </td>
        <td>
          <input v-model="A_1_12">
        </td>
        <td>
          <input v-model="A_1_13">
        </td>
        <td>
          <input v-model="A_1_14">
        </td>
      </tr>
      <tr>
        <td>13%税率的服务、不动产和无形资产</td>
        <td>2</td>
        <td>
          <input v-model="A_2_1">
        </td>
        <td>
          <input v-model="A_2_2">
        </td>
        <td>
          <input v-model="A_2_3">
        </td>
        <td>
          <input v-model="A_2_4">
        </td>
        <td>
          <input v-model="A_2_5">
        </td>
        <td>
          <input v-model="A_2_6">
        </td>
        <td>
          <input v-model="A_2_7">
        </td>
        <td>
          <input v-model="A_2_8">
        </td>
        <td>
          <input v-model="A_2_9">
        </td>
        <td>
          <input v-model="A_2_10">
        </td>
        <td>
          <input v-model="A_2_11">
        </td>
        <td>
          <input v-model="A_2_12">
        </td>
        <td>
          <input v-model="A_2_13">
        </td>
        <td>
          <input v-model="A_2_14">
        </td>
      </tr>
      <tr>
        <td>9%税率的货物及加工修理修配劳务</td>
        <td>3</td>
        <td>
          <input v-model="A_3_1">
        </td>
        <td>
          <input v-model="A_3_2">
        </td>
        <td>
          <input v-model="A_3_3">
        </td>
        <td>
          <input v-model="A_3_4">
        </td>
        <td>
          <input v-model="A_3_5">
        </td>
        <td>
          <input v-model="A_3_6">
        </td>
        <td>
          <input v-model="A_3_7">
        </td>
        <td>
          <input v-model="A_3_8">
        </td>
        <td>
          <input v-model="A_3_9">
        </td>
        <td>
          <input v-model="A_3_10">
        </td>
        <td>
          <input v-model="A_3_11">
        </td>
        <td>
          <input v-model="A_3_12">
        </td>
        <td>
          <input v-model="A_3_13">
        </td>
        <td>
          <input v-model="A_3_14">
        </td>
      </tr>
      <tr>
        <td>9%税率的服务、不动产和无形资产</td>
        <td>4</td>
        <td>
          <input v-model="A_4_1">
        </td>
        <td>
          <input v-model="A_4_2">
        </td>
        <td>
          <input v-model="A_4_3">
        </td>
        <td>
          <input v-model="A_4_4">
        </td>
        <td>
          <input v-model="A_4_5">
        </td>
        <td>
          <input v-model="A_4_6">
        </td>
        <td>
          <input v-model="A_4_7">
        </td>
        <td>
          <input v-model="A_4_8">
        </td>
        <td>
          <input v-model="A_4_9">
        </td>
        <td>
          <input v-model="A_4_10">
        </td>
        <td>
          <input v-model="A_4_11">
        </td>
        <td>
          <input v-model="A_4_12">
        </td>
        <td>
          <input v-model="A_4_13">
        </td>
        <td>
          <input v-model="A_4_14">
        </td>
      </tr>
      <tr>
        <td>6%税率</td>
        <td>5</td>
        <td>
          <input v-model="A_5_1">
        </td>
        <td>
          <input v-model="A_5_2">
        </td>
        <td>
          <input v-model="A_5_3">
        </td>
        <td>
          <input v-model="A_5_4">
        </td>
        <td>
          <input v-model="A_5_5">
        </td>
        <td>
          <input v-model="A_5_6">
        </td>
        <td>
          <input v-model="A_5_7">
        </td>
        <td>
          <input v-model="A_5_8">
        </td>
        <td>
          <input v-model="A_5_9">
        </td>
        <td>
          <input v-model="A_5_10">
        </td>
        <td>
          <input v-model="A_5_11">
        </td>
        <td>
          <input v-model="A_5_12">
        </td>
        <td>
          <input v-model="A_5_13">
        </td>
        <td>
          <input v-model="A_5_14">
        </td>
      </tr>
      <tr>
        <td rowspan="2">其中：即征即退项目</td>
        <td>即征即退货物及加工修理修配劳务</td>
        <td>6</td>
        <td>
          <input v-model="A_6_1">
        </td>
        <td>
          <input v-model="A_6_2">
        </td>
        <td>
          <input v-model="A_6_3">
        </td>
        <td>
          <input v-model="A_6_4">
        </td>
        <td>
          <input v-model="A_6_5">
        </td>
        <td>
          <input v-model="A_6_6">
        </td>
        <td>
          <input v-model="A_6_7">
        </td>
        <td>
          <input v-model="A_6_8">
        </td>
        <td>
          <input v-model="A_6_9">
        </td>
        <td>
          <input v-model="A_6_10">
        </td>
        <td>
          <input v-model="A_6_11">
        </td>
        <td>
          <input v-model="A_6_12">
        </td>
        <td>
          <input v-model="A_6_13">
        </td>
        <td>
          <input v-model="A_6_14">
        </td>
      </tr>
      <tr>
        <td>即征即退服务、不动产和无形资产</td>
        <td>7</td>
        <td>
          <input v-model="A_7_1">
        </td>
        <td>
          <input v-model="A_7_2">
        </td>
        <td>
          <input v-model="A_7_3">
        </td>
        <td>
          <input v-model="A_7_4">
        </td>
        <td>
          <input v-model="A_7_5">
        </td>
        <td>
          <input v-model="A_7_6">
        </td>
        <td>
          <input v-model="A_7_7">
        </td>
        <td>
          <input v-model="A_7_8">
        </td>
        <td>
          <input v-model="A_7_9">
        </td>
        <td>
          <input v-model="A_7_10">
        </td>
        <td>
          <input v-model="A_7_11">
        </td>
        <td>
          <input v-model="A_7_12">
        </td>
        <td>
          <input v-model="A_7_13">
        </td>
        <td>
          <input v-model="A_7_14">
        </td>
      </tr>

      <tr>
        <td rowspan="11">二、简易计税方法计税</td>
        <td rowspan="9">全部征税项目</td>
        <td>6%征收率</td>
        <td>8</td>
        <td>
          <input v-model="A_8_1">
        </td>
        <td>
          <input v-model="A_8_2">
        </td>
        <td>
          <input v-model="A_8_3">
        </td>
        <td>
          <input v-model="A_8_4">
        </td>
        <td>
          <input v-model="A_8_5">
        </td>
        <td>
          <input v-model="A_8_6">
        </td>
        <td>
          <input v-model="A_8_7">
        </td>
        <td>
          <input v-model="A_8_8">
        </td>
        <td>
          <input v-model="A_8_9">
        </td>
        <td>
          <input v-model="A_8_10">
        </td>
        <td>
          <input v-model="A_8_11">
        </td>
        <td>
          <input v-model="A_8_12">
        </td>
        <td>
          <input v-model="A_8_13">
        </td>
        <td>
          <input v-model="A_8_14">
        </td>
      </tr>

      <tr>
        <td>5%征收率的货物及加工修理修配劳务</td>
        <td>9a</td>
        <td>
          <input v-model="A_9a_1">
        </td>
        <td>
          <input v-model="A_9a_2">
        </td>
        <td>
          <input v-model="A_9a_3">
        </td>
        <td>
          <input v-model="A_9a_4">
        </td>
        <td>
          <input v-model="A_9a_5">
        </td>
        <td>
          <input v-model="A_9a_6">
        </td>
        <td>
          <input v-model="A_9a_7">
        </td>
        <td>
          <input v-model="A_9a_8">
        </td>
        <td>
          <input v-model="A_9a_9">
        </td>
        <td>
          <input v-model="A_9a_10">
        </td>
        <td>
          <input v-model="A_9a_11">
        </td>
        <td>
          <input v-model="A_9a_12">
        </td>
        <td>
          <input v-model="A_9a_13">
        </td>
        <td>
          <input v-model="A_9a_14">
        </td>
      </tr>

      <tr>
        <td>5%征收率的服务、不动产和无形资产</td>
        <td>9b</td>
        <td>
          <input v-model="A_9b_1">
        </td>
        <td>
          <input v-model="A_9b_2">
        </td>
        <td>
          <input v-model="A_9b_3">
        </td>
        <td>
          <input v-model="A_9b_4">
        </td>
        <td>
          <input v-model="A_9b_5">
        </td>
        <td>
          <input v-model="A_9b_6">
        </td>
        <td>
          <input v-model="A_9b_7">
        </td>
        <td>
          <input v-model="A_9b_8">
        </td>
        <td>
          <input v-model="A_9b_9">
        </td>
        <td>
          <input v-model="A_9b_10">
        </td>
        <td>
          <input v-model="A_9b_11">
        </td>
        <td>
          <input v-model="A_9b_12">
        </td>
        <td>
          <input v-model="A_9b_13">
        </td>
        <td>
          <input v-model="A_9b_14">
        </td>
      </tr>

      <tr>
        <td>4%征收率</td>
        <td>10</td>
        <td>
          <input v-model="A_10_1">
        </td>
        <td>
          <input v-model="A_10_2">
        </td>
        <td>
          <input v-model="A_10_3">
        </td>
        <td>
          <input v-model="A_10_4">
        </td>
        <td>
          <input v-model="A_10_5">
        </td>
        <td>
          <input v-model="A_10_6">
        </td>
        <td>
          <input v-model="A_10_7">
        </td>
        <td>
          <input v-model="A_10_8">
        </td>
        <td>
          <input v-model="A_10_9">
        </td>
        <td>
          <input v-model="A_10_10">
        </td>
        <td>
          <input v-model="A_10_11">
        </td>
        <td>
          <input v-model="A_10_12">
        </td>
        <td>
          <input v-model="A_10_13">
        </td>
        <td>
          <input v-model="A_10_14">
        </td>
      </tr>

      <tr>
        <td>3%征收率的货物及加工修理修配劳务</td>
        <td>11</td>
        <td>
          <input v-model="A_11_1">
        </td>
        <td>
          <input v-model="A_11_2">
        </td>
        <td>
          <input v-model="A_11_3">
        </td>
        <td>
          <input v-model="A_11_4">
        </td>
        <td>
          <input v-model="A_11_5">
        </td>
        <td>
          <input v-model="A_11_6">
        </td>
        <td>
          <input v-model="A_11_7">
        </td>
        <td>
          <input v-model="A_11_8">
        </td>
        <td>
          <input v-model="A_11_9">
        </td>
        <td>
          <input v-model="A_11_10">
        </td>
        <td>
          <input v-model="A_11_11">
        </td>
        <td>
          <input v-model="A_11_12">
        </td>
        <td>
          <input v-model="A_11_13">
        </td>
        <td>
          <input v-model="A_11_14">
        </td>
      </tr>

      <tr>
        <td>3%征收率的服务、不动产和无形资产</td>
        <td>12</td>
        <td>
          <input v-model="A_12_1">
        </td>
        <td>
          <input v-model="A_12_2">
        </td>
        <td>
          <input v-model="A_12_3">
        </td>
        <td>
          <input v-model="A_12_4">
        </td>
        <td>
          <input v-model="A_12_5">
        </td>
        <td>
          <input v-model="A_12_6">
        </td>
        <td>
          <input v-model="A_12_7">
        </td>
        <td>
          <input v-model="A_12_8">
        </td>
        <td>
          <input v-model="A_12_9">
        </td>
        <td>
          <input v-model="A_12_10">
        </td>
        <td>
          <input v-model="A_12_11">
        </td>
        <td>
          <input v-model="A_12_12">
        </td>
        <td>
          <input v-model="A_12_13">
        </td>
        <td>
          <input v-model="A_12_14">
        </td>
      </tr>

      <tr>
        <td>预征率 %</td>
        <td>13a</td>
        <td>
          <input v-model="A_13a_1">
        </td>
        <td>
          <input v-model="A_13a_2">
        </td>
        <td>
          <input v-model="A_13a_3">
        </td>
        <td>
          <input v-model="A_13a_4">
        </td>
        <td>
          <input v-model="A_13a_5">
        </td>
        <td>
          <input v-model="A_13a_6">
        </td>
        <td>
          <input v-model="A_13a_7">
        </td>
        <td>
          <input v-model="A_13a_8">
        </td>
        <td>
          <input v-model="A_13a_9">
        </td>
        <td>
          <input v-model="A_13a_10">
        </td>
        <td>
          <input v-model="A_13a_11">
        </td>
        <td>
          <input v-model="A_13a_12">
        </td>
        <td>
          <input v-model="A_13a_13">
        </td>
        <td>
          <input v-model="A_13a_14">
        </td>
      </tr>

      <tr>
        <td>预征率 %</td>
        <td>13b</td>
        <td>
          <input v-model="A_13b_1">
        </td>
        <td>
          <input v-model="A_13b_2">
        </td>
        <td>
          <input v-model="A_13b_3">
        </td>
        <td>
          <input v-model="A_13b_4">
        </td>
        <td>
          <input v-model="A_13b_5">
        </td>
        <td>
          <input v-model="A_13b_6">
        </td>
        <td>
          <input v-model="A_13b_7">
        </td>
        <td>
          <input v-model="A_13b_8">
        </td>
        <td>
          <input v-model="A_13b_9">
        </td>
        <td>
          <input v-model="A_13b_10">
        </td>
        <td>
          <input v-model="A_13b_11">
        </td>
        <td>
          <input v-model="A_13b_12">
        </td>
        <td>
          <input v-model="A_13b_13">
        </td>
        <td>
          <input v-model="A_13b_14">
        </td>
      </tr>

      <tr>
        <td>预征率 %</td>
        <td>13c</td>
        <td>
          <input v-model="A_13c_1">
        </td>
        <td>
          <input v-model="A_13c_2">
        </td>
        <td>
          <input v-model="A_13c_3">
        </td>
        <td>
          <input v-model="A_13c_4">
        </td>
        <td>
          <input v-model="A_13c_5">
        </td>
        <td>
          <input v-model="A_13c_6">
        </td>
        <td>
          <input v-model="A_13c_7">
        </td>
        <td>
          <input v-model="A_13c_8">
        </td>
        <td>
          <input v-model="A_13c_9">
        </td>
        <td>
          <input v-model="A_13c_10">
        </td>
        <td>
          <input v-model="A_13c_11">
        </td>
        <td>
          <input v-model="A_13c_12">
        </td>
        <td>
          <input v-model="A_13c_13">
        </td>
        <td>
          <input v-model="A_13c_14">
        </td>
      </tr>

      <tr>
        <td rowspan="2">其中：即征即退项目</td>
        <td>即征即退货物及加工修理修配劳务</td>
        <td>14</td>
        <td>
          <input v-model="A_14_1">
        </td>
        <td>
          <input v-model="A_14_2">
        </td>
        <td>
          <input v-model="A_14_3">
        </td>
        <td>
          <input v-model="A_14_4">
        </td>
        <td>
          <input v-model="A_14_5">
        </td>
        <td>
          <input v-model="A_14_6">
        </td>
        <td>
          <input v-model="A_14_7">
        </td>
        <td>
          <input v-model="A_14_8">
        </td>
        <td>
          <input v-model="A_14_9">
        </td>
        <td>
          <input v-model="A_14_10">
        </td>
        <td>
          <input v-model="A_14_11">
        </td>
        <td>
          <input v-model="A_14_12">
        </td>
        <td>
          <input v-model="A_14_13">
        </td>
        <td>
          <input v-model="A_14_14">
        </td>
      </tr>

      <tr>
        <td>即征即退服务、不动产和无形资产</td>
        <td>15</td>
        <td>
          <input v-model="A_15_1">
        </td>
        <td>
          <input v-model="A_15_2">
        </td>
        <td>
          <input v-model="A_15_3">
        </td>
        <td>
          <input v-model="A_15_4">
        </td>
        <td>
          <input v-model="A_15_5">
        </td>
        <td>
          <input v-model="A_15_6">
        </td>
        <td>
          <input v-model="A_15_7">
        </td>
        <td>
          <input v-model="A_15_8">
        </td>
        <td>
          <input v-model="A_15_9">
        </td>
        <td>
          <input v-model="A_15_10">
        </td>
        <td>
          <input v-model="A_15_11">
        </td>
        <td>
          <input v-model="A_15_12">
        </td>
        <td>
          <input v-model="A_15_13">
        </td>
        <td>
          <input v-model="A_15_14">
        </td>
      </tr>

      <tr>
        <td rowspan="2">三、免抵退税</td>
        <td>货物及加工修理修配劳务</td>
        <td></td>
        <td>16</td>
        <td>
          <input v-model="A_16_1">
        </td>
        <td>
          <input v-model="A_16_2">
        </td>
        <td>
          <input v-model="A_16_3">
        </td>
        <td>
          <input v-model="A_16_4">
        </td>
        <td>
          <input v-model="A_16_5">
        </td>
        <td>
          <input v-model="A_16_6">
        </td>
        <td>
          <input v-model="A_16_7">
        </td>
        <td>
          <input v-model="A_16_8">
        </td>
        <td>
          <input v-model="A_16_9">
        </td>
        <td>
          <input v-model="A_16_10">
        </td>
        <td>
          <input v-model="A_16_11">
        </td>
        <td>
          <input v-model="A_16_12">
        </td>
        <td>
          <input v-model="A_16_13">
        </td>
        <td>
          <input v-model="A_16_14">
        </td>
      </tr>
      <tr>
        <td>服务、不动产和无形资产</td>
        <td></td>
        <td>17</td>
        <td>
          <input v-model="A_17_1">
        </td>
        <td>
          <input v-model="A_17_2">
        </td>
        <td>
          <input v-model="A_17_3">
        </td>
        <td>
          <input v-model="A_17_4">
        </td>
        <td>
          <input v-model="A_17_5">
        </td>
        <td>
          <input v-model="A_17_6">
        </td>
        <td>
          <input v-model="A_17_7">
        </td>
        <td>
          <input v-model="A_17_8">
        </td>
        <td>
          <input v-model="A_17_9">
        </td>
        <td>
          <input v-model="A_17_10">
        </td>
        <td>
          <input v-model="A_17_11">
        </td>
        <td>
          <input v-model="A_17_12">
        </td>
        <td>
          <input v-model="A_17_13">
        </td>
        <td>
          <input v-model="A_17_14">
        </td>
      </tr>
      <tr>
        <td rowspan="2">四、免税</td>
        <td>货物及加工修理修配劳务</td>
        <td></td>
        <td>18</td>
        <td>
          <input v-model="A_18_1">
        </td>
        <td>
          <input v-model="A_18_2">
        </td>
        <td>
          <input v-model="A_18_3">
        </td>
        <td>
          <input v-model="A_18_4">
        </td>
        <td>
          <input v-model="A_18_5">
        </td>
        <td>
          <input v-model="A_18_6">
        </td>
        <td>
          <input v-model="A_18_7">
        </td>
        <td>
          <input v-model="A_18_8">
        </td>
        <td>
          <input v-model="A_18_9">
        </td>
        <td>
          <input v-model="A_18_10">
        </td>
        <td>
          <input v-model="A_18_11">
        </td>
        <td>
          <input v-model="A_18_12">
        </td>
        <td>
          <input v-model="A_18_13">
        </td>
        <td>
          <input v-model="A_18_14">
        </td>
      </tr>
      <tr>
        <td>服务、不动产和无形资产</td>
        <td></td>
        <td>19</td>
        <td>
          <input v-model="A_19_1">
        </td>
        <td>
          <input v-model="A_19_2">
        </td>
        <td>
          <input v-model="A_19_3">
        </td>
        <td>
          <input v-model="A_19_4">
        </td>
        <td>
          <input v-model="A_19_5">
        </td>
        <td>
          <input v-model="A_19_6">
        </td>
        <td>
          <input v-model="A_19_7">
        </td>
        <td>
          <input v-model="A_19_8">
        </td>
        <td>
          <input v-model="A_19_9">
        </td>
        <td>
          <input v-model="A_19_10">
        </td>
        <td>
          <input v-model="A_19_11">
        </td>
        <td>
          <input v-model="A_19_12">
        </td>
        <td>
          <input v-model="A_19_13">
        </td>
        <td>
          <input v-model="A_19_14">
        </td>
      </tr>
    </table>
<br/>
<hr/>
<br/>
    <div>
      <p style="color:red;">1、开具增值税专用发票、开具其他发票两个栏次根据1.1销项发票取数台账填写，区分发票类型（专票或普票）结合对应的申报行次填写。（包含免税开票情形）</p>
      <p style="color:red;">2、根据总销售收入台账减去销项发票取数台账加上视同销售台账得到的金额，按照对应的申报表栏次填写未开具发票销售额及销项税额</p>
      <p style="color:red;">3、纳税检查调整栏次根据1.3纳税检查调整台账中的数据，按照对应的申报表栏次填写</p>
      <p style="color:red;">4.即征即退行次数据根据1.5即征即退管理台账的金额填写</p>
      <p style="color:red;">5.服务、不动产和无形资产扣除项目本期实际扣除金额根据附表三的数据填写，具体公式已经在表格里</p>
    </div>
  </div>
</template>

<script>
// onmouseout '#d4e3e5'
// onmouseover '#ffffff'
export default {
  //19*14
  data() {
    return {
      A_1_1: 0,
      A_1_2: 0,
      A_1_3: 0,
      A_1_4: 0,
      A_1_5: 0,
      A_1_6: 0,
      A_1_7: 0,
      A_1_8: 0,
      A_1_12: 0,
      A_2_1: 0,
      A_2_2: 0,
      A_2_3: 0,
      A_2_4: 0,
      A_2_5: 0,
      A_2_6: 0,
      A_2_7: 0,
      A_2_8: 0,
      A_2_12: 0,
      A_3_1: 0,
      A_3_2: 0,
      A_3_3: 0,
      A_3_4: 0,
      A_3_5: 0,
      A_3_6: 0,
      A_3_7: 0,
      A_3_8: 0,
      A_3_12: 0,
      A_4_1: 0,
      A_4_2: 0,
      A_4_3: 0,
      A_4_4: 0,
      A_4_5: 0,
      A_4_6: 0,
      A_4_7: 0,
      A_4_8: 0,
      A_4_12: 0,
      A_5_1: 0,
      A_5_2: 0,
      A_5_3: 0,
      A_5_4: 0,
      A_5_5: 0,
      A_5_6: 0,
      A_5_7: 0,
      A_5_8: 0,
      A_5_12: 0,
      A_6_1: 0,
      A_6_2: 0,
      A_6_3: 0,
      A_6_4: 0,
      A_6_5: 0,
      A_6_6: 0,
      A_6_7: 0,
      A_6_8: 0,
      A_6_12: 0,
      A_7_1: 0,
      A_7_2: 0,
      A_7_3: 0,
      A_7_4: 0,
      A_7_5: 0,
      A_7_6: 0,
      A_7_7: 0,
      A_7_8: 0,
      A_7_12: 0,
      A_8_1: 0,
      A_8_2: 0,
      A_8_3: 0,
      A_8_4: 0,
      A_8_5: 0,
      A_8_6: 0,
      A_8_7: 0,
      A_8_8: 0,
      A_8_12: 0,
      A_9a_1: 0,
      A_9a_2: 0,
      A_9a_3: 0,
      A_9a_4: 0,
      A_9a_5: 0,
      A_9a_6: 0,
      A_9a_7: 0,
      A_9a_8: 0,
      A_9a_12: 0,
      A_9b_1: 0,
      A_9b_2: 0,
      A_9b_3: 0,
      A_9b_4: 0,
      A_9b_5: 0,
      A_9b_6: 0,
      A_9b_7: 0,
      A_9b_8: 0,
      A_9b_12: 0,
      A_10_1: 0,
      A_10_2: 0,
      A_10_3: 0,
      A_10_4: 0,
      A_10_5: 0,
      A_10_6: 0,
      A_10_7: 0,
      A_10_8: 0,
      A_10_12: 0,
      A_11_1: 0,
      A_11_2: 0,
      A_11_3: 0,
      A_11_4: 0,
      A_11_5: 0,
      A_11_6: 0,
      A_11_7: 0,
      A_11_8: 0,
      A_11_12: 0,
      A_12_1: 0,
      A_12_2: 0,
      A_12_3: 0,
      A_12_4: 0,
      A_12_5: 0,
      A_12_6: 0,
      A_12_7: 0,
      A_12_8: 0,
      A_12_12: 0,
      A_13a_1: 0,
      A_13a_2: 0,
      A_13a_3: 0,
      A_13a_4: 0,
      A_13a_5: 0,
      A_13a_6: 0,
      A_13a_7: 0,
      A_13a_8: 0,
      A_13a_12: 0,
      A_13b_1: 0,
      A_13b_2: 0,
      A_13b_3: 0,
      A_13b_4: 0,
      A_13b_5: 0,
      A_13b_6: 0,
      A_13b_7: 0,
      A_13b_8: 0,
      A_13b_12: 0,
      A_13c_1: 0,
      A_13c_2: 0,
      A_13c_3: 0,
      A_13c_4: 0,
      A_13c_5: 0,
      A_13c_6: 0,
      A_13c_7: 0,
      A_13c_8: 0,
      A_13c_12: 0,
      A_14_1: 0,
      A_14_2: 0,
      A_14_3: 0,
      A_14_4: 0,
      A_14_5: 0,
      A_14_6: 0,
      A_14_7: 0,
      A_14_8: 0,
      A_14_12: 0,
      A_15_1: 0,
      A_15_2: 0,
      A_15_3: 0,
      A_15_4: 0,
      A_15_5: 0,
      A_15_6: 0,
      A_15_7: 0,
      A_15_8: 0,
      A_15_12: 0,
      A_16_1: 0,
      A_16_2: 0,
      A_16_3: 0,
      A_16_4: 0,
      A_16_5: 0,
      A_16_6: 0,
      A_16_7: 0,
      A_16_8: 0,
      A_16_12: 0,
      A_17_1: 0,
      A_17_2: 0,
      A_17_3: 0,
      A_17_4: 0,
      A_17_5: 0,
      A_17_6: 0,
      A_17_7: 0,
      A_17_8: 0,
      A_17_12: 0,
      A_18_1: 0,
      A_18_2: 0,
      A_18_3: 0,
      A_18_4: 0,
      A_18_5: 0,
      A_18_6: 0,
      A_18_7: 0,
      A_18_8: 0,
      A_18_12: 0,
      A_19_1: 0,
      A_19_2: 0,
      A_19_3: 0,
      A_19_4: 0,
      A_19_5: 0,
      A_19_6: 0,
      A_19_7: 0,
      A_19_8: 0,
      A_19_12: 0,
      sl: 0.1
    };
  },
  computed: {
    A_1_9() {
      return +this.A_1_1 + +this.A_1_3 + +this.A_1_5 + +this.A_1_7;
    },
    A_2_9() {
      return +this.A_2_1 + +this.A_2_3 + +this.A_2_5 + +this.A_2_7;
    },
    A_3_9() {
      return +this.A_3_1 + +this.A_3_3 + +this.A_3_5 + +this.A_3_7;
    },
    A_4_9() {
      return +this.A_4_1 + +this.A_4_3 + +this.A_4_5 + +this.A_4_7;
    },
    A_5_9() {
      return +this.A_5_1 + +this.A_5_3 + +this.A_5_5 + +this.A_5_7;
    },
    A_6_9() {
      return +this.A_6_1 + +this.A_6_3 + +this.A_6_5 + +this.A_6_7;
    },
    A_7_9() {
      return +this.A_7_1 + +this.A_7_3 + +this.A_7_5 + +this.A_7_7;
    },
    A_8_9() {
      return +this.A_8_1 + +this.A_8_3 + +this.A_8_5 + +this.A_8_7;
    },
    A_9a_9() {
      return +this.A_9a_1 + +this.A_9a_3 + +this.A_9a_5 + +this.A_9a_7;
    },
    A_9b_9() {
      return +this.A_9b_1 + +this.A_9b_3 + +this.A_9b_5 + +this.A_9b_7;
    },
    A_10_9() {
      return +this.A_10_1 + +this.A_10_3 + +this.A_10_5 + +this.A_10_7;
    },
    A_11_9() {
      return +this.A_11_1 + +this.A_11_3 + +this.A_11_5 + +this.A_11_7;
    },
    A_12_9() {
      return +this.A_12_1 + +this.A_12_3 + +this.A_12_5 + +this.A_12_7;
    },
    A_13a_9() {
      return +this.A_13a_1 + +this.A_13a_3 + +this.A_13a_5 + +this.A_13a_7;
    },
    A_13b_9() {
      return +this.A_13b_1 + +this.A_13b_3 + +this.A_13b_5 + +this.A_13b_7;
    },
    A_13c_9() {
      return +this.A_13c_1 + +this.A_13c_3 + +this.A_13c_5 + +this.A_13c_7;
    },
    A_14_9() {
      return +this.A_14_1 + +this.A_14_3 + +this.A_14_5 + +this.A_14_7;
    },
    A_15_9() {
      return +this.A_15_1 + +this.A_15_3 + +this.A_15_5 + +this.A_15_7;
    },
    A_16_9() {
      return +this.A_16_1 + +this.A_16_3 + +this.A_16_5 + +this.A_16_7;
    },
    A_17_9() {
      return +this.A_17_1 + +this.A_17_3 + +this.A_17_5 + +this.A_17_7;
    },
    A_18_9() {
      return +this.A_18_1 + +this.A_18_3 + +this.A_18_5 + +this.A_18_7;
    },
    A_19_9() {
      return +this.A_19_1 + +this.A_19_3 + +this.A_19_5 + +this.A_19_7;
    },
    A_1_10() {
      return +this.A_1_2 + +this.A_1_4 + +this.A_1_6 + +this.A_1_8;
    },
    A_2_10() {
      return +this.A_2_2 + +this.A_2_4 + +this.A_2_6 + +this.A_2_8;
    },
    A_3_10() {
      return +this.A_3_2 + +this.A_3_4 + +this.A_3_6 + +this.A_3_8;
    },
    A_4_10() {
      return +this.A_4_2 + +this.A_4_4 + +this.A_4_6 + +this.A_4_8;
    },
    A_5_10() {
      return +this.A_5_2 + +this.A_5_4 + +this.A_5_6 + +this.A_5_8;
    },
    A_6_10() {
      return +this.A_6_2 + +this.A_6_4 + +this.A_6_6 + +this.A_6_8;
    },
    A_7_10() {
      return +this.A_7_2 + +this.A_7_4 + +this.A_7_6 + +this.A_7_8;
    },
    A_8_10() {
      return +this.A_8_2 + +this.A_8_4 + +this.A_8_6 + +this.A_8_8;
    },
    A_9a_10() {
      return +this.A_9a_2 + +this.A_9a_4 + +this.A_9a_6 + +this.A_9a_8;
    },
    A_9b_10() {
      return +this.A_9b_2 + +this.A_9b_4 + +this.A_9b_6 + +this.A_9b_8;
    },
    A_10_10() {
      return +this.A_10_2 + +this.A_10_4 + +this.A_10_6 + +this.A_10_8;
    },
    A_11_10() {
      return +this.A_11_2 + +this.A_11_4 + +this.A_11_6 + +this.A_11_8;
    },
    A_12_10() {
      return +this.A_12_2 + +this.A_12_4 + +this.A_12_6 + +this.A_12_8;
    },
    A_13a_10() {
      return +this.A_13a_2 + +this.A_13a_4 + +this.A_13a_6 + +this.A_13a_8;
    },
    A_13b_10() {
      return +this.A_13b_2 + +this.A_13b_4 + +this.A_13b_6 + +this.A_13b_8;
    },
    A_13c_10() {
      return +this.A_13c_2 + +this.A_13c_4 + +this.A_13c_6 + +this.A_13c_8;
    },
    A_14_10() {
      return +this.A_14_2 + +this.A_14_4 + +this.A_14_6 + +this.A_14_8;
    },
    A_15_10() {
      return +this.A_15_2 + +this.A_15_4 + +this.A_15_6 + +this.A_15_8;
    },
    A_16_10() {
      return +this.A_16_2 + +this.A_16_4 + +this.A_16_6 + +this.A_16_8;
    },
    A_17_10() {
      return +this.A_17_2 + +this.A_17_4 + +this.A_17_6 + +this.A_17_8;
    },
    A_18_10() {
      return +this.A_18_2 + +this.A_18_4 + +this.A_18_6 + +this.A_18_8;
    },
    A_19_10() {
      return +this.A_19_2 + +this.A_19_4 + +this.A_19_6 + +this.A_19_8;
    },

    A_1_11() {
      return +this.A_1_9 + +this.A_1_10;
    },
    A_2_11() {
      return +this.A_2_9 + +this.A_2_10;
    },
    A_3_11() {
      return +this.A_3_9 + +this.A_3_10;
    },
    A_4_11() {
      return +this.A_4_9 + +this.A_4_10;
    },
    A_5_11() {
      return +this.A_5_9 + +this.A_5_10;
    },
    A_6_11() {
      return +this.A_6_9 + +this.A_6_10;
    },
    A_7_11() {
      return +this.A_7_9 + +this.A_7_10;
    },
    A_8_11() {
      return +this.A_8_9 + +this.A_8_10;
    },
    A_9a_11() {
      return +this.A_9a_9 + +this.A_9a_10;
    },
    A_9b_11() {
      return +this.A_9b_9 + +this.A_9b_10;
    },
    A_10_11() {
      return +this.A_10_9 + +this.A_10_10;
    },
    A_11_11() {
      return +this.A_11_9 + +this.A_11_10;
    },
    A_12_11() {
      return +this.A_12_9 + +this.A_12_10;
    },
    A_13a_11() {
      return +this.A_13a_9 + +this.A_13a_10;
    },
    A_13b_11() {
      return +this.A_13b_9 + +this.A_13b_10;
    },
    A_13c_11() {
      return +this.A_13c_9 + +this.A_13c_10;
    },
    A_14_11() {
      return +this.A_14_9 + +this.A_14_10;
    },
    A_15_11() {
      return +this.A_15_9 + +this.A_15_10;
    },
    A_16_11() {
      return +this.A_16_9 + +this.A_16_10;
    },
    A_17_11() {
      return +this.A_17_9 + +this.A_17_10;
    },
    A_18_11() {
      return +this.A_18_9 + +this.A_18_10;
    },
    A_19_11() {
      return +this.A_19_9 + +this.A_19_10;
    },

    A_1_13() {
      return +this.A_1_11 - +this.A_1_12;
    },
    A_2_13() {
      return +this.A_2_11 - +this.A_2_12;
    },
    A_3_13() {
      return +this.A_3_11 - +this.A_3_12;
    },
    A_4_13() {
      return +this.A_4_11 - +this.A_4_12;
    },
    A_5_13() {
      return +this.A_5_11 - +this.A_5_12;
    },
    A_6_13() {
      return +this.A_6_11 - +this.A_6_12;
    },
    A_7_13() {
      return +this.A_7_11 - +this.A_7_12;
    },
    A_8_13() {
      return +this.A_8_11 - +this.A_8_12;
    },
    A_9a_13() {
      return +this.A_9a_11 - +this.A_9a_12;
    },
    A_9b_13() {
      return +this.A_9b_11 - +this.A_9b_12;
    },
    A_10_13() {
      return +this.A_10_11 - +this.A_10_12;
    },
    A_11_13() {
      return +this.A_11_11 - +this.A_11_12;
    },
    A_12_13() {
      return +this.A_12_11 - +this.A_12_12;
    },
    A_13a_13() {
      return +this.A_13a_11 - +this.A_13a_12;
    },
    A_13b_13() {
      return +this.A_13b_11 - +this.A_13b_12;
    },
    A_13c_13() {
      return +this.A_13c_11 - +this.A_13c_12;
    },
    A_14_13() {
      return +this.A_14_11 - +this.A_14_12;
    },
    A_15_13() {
      return +this.A_15_11 - +this.A_15_12;
    },
    A_16_13() {
      return +this.A_16_11 - +this.A_16_12;
    },
    A_17_13() {
      return +this.A_17_11 - +this.A_17_12;
    },
    A_18_13() {
      return +this.A_18_11 - +this.A_18_12;
    },
    A_19_13() {
      return +this.A_19_11 - +this.A_19_12;
    },

    A_1_14() {
      return (+this.A_1_13 / (1 + this.sl)) * this.sl;
    },
    A_2_14() {
      return (+this.A_2_13 / (1 + this.sl)) * this.sl;
    },
    A_3_14() {
      return (+this.A_3_13 / (1 + this.sl)) * this.sl;
    },
    A_4_14() {
      return (+this.A_4_13 / (1 + this.sl)) * this.sl;
    },
    A_5_14() {
      return (+this.A_5_13 / (1 + this.sl)) * this.sl;
    },
    A_6_14() {
      return (+this.A_6_13 / (1 + this.sl)) * this.sl;
    },
    A_7_14() {
      return (+this.A_7_13 / (1 + this.sl)) * this.sl;
    },
    A_8_14() {
      return (+this.A_8_13 / (1 + this.sl)) * this.sl;
    },
    A_9a_14() {
      return (+this.A_9a_13 / (1 + this.sl)) * this.sl;
    },
    A_9b_14() {
      return (+this.A_9b_13 / (1 + this.sl)) * this.sl;
    },
    A_10_14() {
      return (+this.A_10_13 / (1 + this.sl)) * this.sl;
    },
    A_11_14() {
      return (+this.A_11_13 / (1 + this.sl)) * this.sl;
    },
    A_12_14() {
      return (+this.A_12_13 / (1 + this.sl)) * this.sl;
    },
    A_13a_14() {
      return (+this.A_13a_13 / (1 + this.sl)) * this.sl;
    },
    A_13b_14() {
      return (+this.A_13b_13 / (1 + this.sl)) * this.sl;
    },
    A_13c_14() {
      return (+this.A_13c_13 / (1 + this.sl)) * this.sl;
    },
    A_14_14() {
      return (+this.A_14_13 / (1 + this.sl)) * this.sl;
    },
    A_15_14() {
      return (+this.A_15_13 / (1 + this.sl)) * this.sl;
    },
    A_16_14() {
      return (+this.A_16_13 / (1 + this.sl)) * this.sl;
    },
    A_17_14() {
      return (+this.A_17_13 / (1 + this.sl)) * this.sl;
    },
    A_18_14() {
      return (+this.A_18_13 / (1 + this.sl)) * this.sl;
    },
    A_19_14() {
      return (+this.A_19_13 / (1 + +this.sl)) * this.sl;
    }
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

input {
  width: 80px;
}
</style>
 
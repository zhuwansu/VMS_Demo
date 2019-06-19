<template>
  <div>
    <table style id="tfhover" class="tftable" border="1">
      <tr>
        <th style="text-align:center;" colspan="5">增值税纳税申报表附列资料（二）</th>
      </tr>
      <tr>
        <th style="text-align:center;font-size: 12px;" colspan="5">（本期进项税额明细）</th>
      </tr>
      <tr>
        <td colspan="5">税款所属时间： 年 月 日 至 年 月 日</td>
      </tr>
      <tr>
        <td colspan="4">纳税人名称：（公章）</td>
        <td colspan="1">金额单位：元至角分</td>
      </tr>
      <tr>
        <td colspan="5" style="text-align:center;">一、申报抵扣的进项税额</td>
      </tr>
      <tr>
        <td>项目</td>
        <td>栏次</td>
        <td>份数</td>
        <td>金额</td>
        <td>税额</td>
      </tr>
      <tr>
        <td>（一）认证相符的增值税专用发票</td>
        <td>1=2+3</td>
        <td>
          <input v-model="fs_1">
        </td>
        <td>
          <input v-model="je_1">
        </td>
        <td>
          <input v-model="se_1">
        </td>
      </tr>
      <tr>
        <td>其中：本期认证相符且本期申报抵扣</td>
        <td>2</td>
        <td>
          <input v-model="fs_2">
        </td>
        <td>
          <input v-model="je_2">
        </td>
        <td>
          <input v-model="se_2">
        </td>
      </tr>
      <tr>
        <td>前期认证相符且本期申报抵扣</td>
        <td>3</td>
        <td>
          <input v-model="fs_3">
        </td>
        <td>
          <input v-model="je_3">
        </td>
        <td>
          <input v-model="se_3">
        </td>
      </tr>
      <tr>
        <td>（二）其他扣税凭证</td>
        <td>4=5+6+7+8a+8b</td>
        <td>
          <input v-model="fs_4">
        </td>
        <td>
          <input v-model="je_4">
        </td>
        <td>
          <input v-model="se_4">
        </td>
      </tr>

      <tr>
        <td>其中：海关进口增值税专用缴款书</td>
        <td>5</td>
        <td>
          <input v-model="fs_5">
        </td>
        <td>
          <input v-model="je_5">
        </td>
        <td>
          <input v-model="se_5">
        </td>
      </tr>

      <tr>
        <td>农产品收购发票或者销售发票</td>
        <td>6</td>
        <td>不填写</td>
        <td>不填写</td>
        <td>
          <input v-model="se_6">
        </td>
      </tr>
      <tr>
        <td>代扣代缴税收缴款凭证</td>
        <td>7</td>
        <td>
          <input v-model="fs_7">
        </td>
        <td>
          <input v-model="je_7">
        </td>
        <td>
          <input v-model="se_7">
        </td>
      </tr>
      <tr>
        <td>加计扣除农产品进项税额</td>
        <td>8a</td>
        <td>
          <input v-model="fs_8a">
        </td>
        <td>
          <input v-model="je_8a">
        </td>
        <td>
          <input v-model="se_8a">
        </td>
      </tr>

      <tr>
        <td>其他</td>
        <td>8b</td>
        <td>不填写</td>
        <td>
          <input v-model="je_8b">
        </td>
        <td>
          <input title="/2、通行费、旅客运输服务台账可抵扣进项税额填入该栏" v-model="se_8b">
        </td>
      </tr>
      <tr>
        <td>（三）本期用于购建不动产的扣税凭证</td>
        <td>9</td>
        <td>
          <input v-model="fs_9">
        </td>
        <td>
          <input v-model="je_9">
        </td>
        <td>
          <input v-model="se_9">
        </td>
      </tr>
      <tr>
        <td>（四）本期用于抵扣的旅客运输服务扣税凭证</td>
        <td>10</td>
        <td>
          <input v-model="fs_10">
        </td>
        <td>
          <input v-model="je_10">
        </td>
        <td>
          <input v-model="se_10">
        </td>
      </tr>

      <tr>
        <td>（五）外贸企业进项税额抵扣证明</td>
        <td>11</td>
        <td>
          <input v-model="fs_11">
        </td>
        <td>
          <input v-model="je_11">
        </td>
        <td>
          <input v-model="se_11">
        </td>
      </tr>
      <tr>
        <td>当期申报抵扣进项税额合计</td>
        <td>12</td>
        <td>
          <input v-model="fs_12">
        </td>
        <td>
          <input v-model="je_12">
        </td>
        <td>
          <input v-model="se_12">
        </td>
      </tr>
      <tr>
        <td colspan="5" style="text-align:center;">二、进项税额转出额</td>
      </tr>

      <tr>
        <td>项目</td>
        <td>栏次</td>
        <td colspan="3">税额</td>
      </tr>
      <tr>
        <td>本期进项税额转出额</td>
        <td>13=14至23之和</td>
        <td>
          <input v-model="fs_13">
        </td>
        <td>
          <input v-model="je_13">
        </td>
        <td>
          <input v-model="se_13">
        </td>
      </tr>
      <tr>
        <td>其中：免税项目用</td>
        <td>14</td>
        <td>
          <input v-model="fs_14">
        </td>
        <td>
          <input v-model="je_14">
        </td>
        <td>
          <input v-model="se_14">
        </td>
      </tr>
      <tr>
        <td>集体福利、个人消费</td>
        <td>15</td>
        <td>
          <input v-model="fs_15">
        </td>
        <td>
          <input v-model="je_15">
        </td>
        <td>
          <input v-model="se_15">
        </td>
      </tr>
      <tr>
        <td>非正常损失</td>
        <td>16</td>
        <td>
          <input v-model="fs_16">
        </td>
        <td>
          <input v-model="je_16">
        </td>
        <td>
          <input v-model="se_16">
        </td>
      </tr>
      <tr>
        <td>简易计税方法征税项目用</td>
        <td>17</td>
        <td>
          <input v-model="fs_17">
        </td>
        <td>
          <input v-model="je_17">
        </td>
        <td>
          <input v-model="se_17">
        </td>
      </tr>
      <tr>
        <td>免抵退税办法不得抵扣的进项税额</td>
        <td>18</td>
        <td>
          <input v-model="fs_18">
        </td>
        <td>
          <input v-model="je_18">
        </td>
        <td>
          <input v-model="se_18">
        </td>
      </tr>
      <tr>
        <td>纳税检查调减进项税额</td>
        <td>19</td>
        <td>
          <input v-model="fs_19">
        </td>
        <td>
          <input v-model="je_19">
        </td>
        <td>
          <input v-model="se_19">
        </td>
      </tr>
      <tr>
        <td>红字专用发票信息表注明的进项税额</td>
        <td>20</td>
        <td>
          <input v-model="fs_20">
        </td>
        <td>
          <input v-model="je_20">
        </td>
        <td>
          <input v-model="se_20">
        </td>
      </tr>
      <tr>
        <td>上期留抵税额抵减欠税</td>
        <td>21</td>
        <td>
          <input v-model="fs_21">
        </td>
        <td>
          <input v-model="je_21">
        </td>
        <td>
          <input v-model="se_21">
        </td>
      </tr>
      <tr>
        <td>上期留抵税额退税</td>
        <td>22</td>
        <td>
          <input v-model="fs_22">
        </td>
        <td>
          <input v-model="je_22">
        </td>
        <td>
          <input v-model="se_22">
        </td>
      </tr>
      <tr>
        <td>其他应作进项税额转出的情形</td>
        <td>23</td>
        <td>
          <input v-model="fs_23">
        </td>
        <td>
          <input v-model="je_23">
        </td>
        <td>
          <input v-model="se_23">
        </td>
      </tr>

      <tr>
        <td colspan="5" style="text-align:center;">三、待抵扣进项税额</td>
      </tr>
      <tr>
        <td>项目</td>
        <td>栏次</td>
        <td>份数</td>
        <td>金额</td>
        <td>税额</td>
      </tr>

      <tr>
        <td>（一）认证相符的增值税专用发票</td>
        <td>24</td>
        <td>
          <input v-model="fs_24">
        </td>
        <td>
          <input v-model="je_24">
        </td>
        <td>
          <input v-model="se_24">
        </td>
      </tr>
      <tr>
        <td>期初已认证相符但未申报抵扣</td>
        <td>25</td>
        <td>
          <input v-model="fs_25">
        </td>
        <td>
          <input v-model="je_25">
        </td>
        <td>
          <input v-model="se_25">
        </td>
      </tr>
      <tr>
        <td>本期认证相符且本期未申报抵扣</td>
        <td>26</td>
        <td>
          <input v-model="fs_26">
        </td>
        <td>
          <input v-model="je_26">
        </td>
        <td>
          <input v-model="se_26">
        </td>
      </tr>
      <tr>
        <td>期末已认证相符但未申报抵扣</td>
        <td>27</td>
        <td>
          <input v-model="fs_27">
        </td>
        <td>
          <input v-model="je_27">
        </td>
        <td>
          <input v-model="se_27">
        </td>
      </tr>
      <tr>
        <td>其中：按照税法规定不允许抵扣</td>
        <td>28</td>
        <td>
          <input v-model="fs_28">
        </td>
        <td>
          <input v-model="je_28">
        </td>
        <td>
          <input v-model="se_28">
        </td>
      </tr>
      <tr>
        <td>（二）其他扣税凭证</td>
        <td>29=30至33之和</td>
        <td>
          <input v-model="fs_29">
        </td>
        <td>
          <input v-model="je_29">
        </td>
        <td>
          <input v-model="se_29">
        </td>
      </tr>
      <tr>
        <td>其中：海关进口增值税专用缴款书</td>
        <td>30</td>
        <td>
          <input v-model="fs_30">
        </td>
        <td>
          <input v-model="je_30">
        </td>
        <td>
          <input v-model="se_30">
        </td>
      </tr>
      <tr>
        <td>农产品收购发票或者销售发票</td>
        <td>31</td>
        <td>
          <input v-model="fs_31">
        </td>
        <td>
          <input v-model="je_31">
        </td>
        <td>
          <input v-model="se_31">
        </td>
      </tr>
      <tr>
        <td>代扣代缴税收缴款凭证</td>
        <td>32</td>
        <td>
          <input v-model="fs_32">
        </td>
        <td>
          <input v-model="je_32">
        </td>
        <td>
          <input v-model="se_32">
        </td>
      </tr>
      <tr>
        <td>其他</td>
        <td>33</td>
        <td>
          <input v-model="fs_33">
        </td>
        <td>
          <input v-model="je_33">
        </td>
        <td>
          <input v-model="se_33">
        </td>
      </tr>
      <tr>
        <td></td>
        <td>34</td>
        <td>
          <input v-model="fs_34">
        </td>
        <td>
          <input v-model="je_34">
        </td>
        <td>
          <input v-model="se_34">
        </td>
      </tr>

      <tr>
        <td colspan="5" style="text-align:center;">四、其他</td>
      </tr>
      <tr>
        <td>项目</td>
        <td>栏次</td>
        <td>份数</td>
        <td>金额</td>
        <td>税额</td>
      </tr>

      <tr>
        <td>本期认证相符的增值税专用发票</td>
        <td>35</td>
        <td>
          <input v-model="fs_35">
        </td>
        <td>
          <input v-model="je_35">
        </td>
        <td>
          <input v-model="se_35">
        </td>
      </tr>
      <tr>
        <td>代扣代缴税额</td>
        <td>36</td>
        <td>
          <input v-model="fs_36">
        </td>
        <td>
          <input v-model="je_36">
        </td>
        <td>
          <input v-model="se_36">
        </td>
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
      fs_2: 0,
      se_2: 0,
      je_2: 0,
      fs_3: 0,
      se_3: 0,
      je_3: 0,
      fs_5: 0,
      se_5: 0,
      je_5: 0,
      se_6: 0,
      fs_7: 0,
      se_7: 0,
      je_7: 0,
      se_8a: 0,
      je_8a: 0,
      fs_8a:0,
      se_8b: 0,
      je_8b: 0,
      fs_8b:0,
      fs_9: 0,
      se_9: 0,
      je_9: 0,
      fs_10: 0,
      se_10: 0,
      je_10: 0,
      fs_11: 0,
      se_11: 0,
      je_11: 0,
      fs_14: 0,
      se_14: 0,
      je_14: 0,
      fs_15: 0,
      se_15: 0,
      je_15: 0,
      fs_16: 0,
      se_16: 0,
      je_16: 0,
      fs_17: 0,
      se_17: 0,
      je_17: 0,
      fs_18: 0,
      se_18: 0,
      je_18: 0,
      fs_19: 0,
      se_19: 0,
      je_19: 0,
      fs_20: 0,
      se_20: 0,
      je_20: 0,
      fs_21: 0,
      se_21: 0,
      je_21: 0,
      fs_22: 0,
      se_22: 0,
      je_22: 0,
      fs_23: 0,
      se_23: 0,
      je_23: 0,
      fs_24: 0,
      se_24: 0,
      je_24: 0,
      fs_25: 0,
      se_25: 0,
      je_25: 0,
      fs_26: 0,
      se_26: 0,
      je_26: 0,
      fs_27: 0,
      se_27: 0,
      je_27: 0,
      fs_28: 0,
      se_28: 0,
      je_28: 0,
      fs_30: 0,
      se_30: 0,
      je_30: 0,
      fs_31: 0,
      se_31: 0,
      je_31: 0,
      fs_32: 0,
      se_32: 0,
      je_32: 0,
      fs_33: 0,
      se_33: 0,
      je_33: 0,
      fs_34: 0,
      se_34: 0,
      je_34: 0,
      fs_35: 0,
      se_35: 0,
      je_35: 0,
      fs_36: 0,
      se_36: 0,
      je_36: 0,
    };
  },
  computed: {
    fs_4() {
      return +this.fs_5 +  +this.fs_7 + +this.fs_8a ;
    },
    se_4() {
      return +this.se_5 + +this.se_6 + +this.se_7 + +this.se_8a + +this.se_8b;
    },
    je_4() {
      return +this.je_5 + +this.je_7 + +this.je_8a + +this.je_8b;
    },
    fs_1() {
      return +this.fs_2 + +this.fs_3;
    },
    se_1() {
      return +this.se_2 + +this.se_3;
    },
    je_1() {
      return +this.je_2 + +this.je_3;
    },
    fs_12() {
      return +this.fs_1 + +this.fs_4 + +this.fs_11;
    },
    se_12() {
      return +this.se_1 + +this.se_4 + +this.se_11;
    },
    je_12() {
      return +this.je_1 + +this.je_4 + +this.je_11;
    },
    fs_29() {
      return (
        +this.fs_30 + +this.fs_31 + +this.fs_32 + +this.fs_33 + +this.fs_34
      );
    },
    se_29() {
      return;
      +this.se_30 + +this.se_31 + +this.se_32 + +this.se_33 + +this.se_34;
    },
    je_29() {
      return (
        +this.je_30 + +this.je_31 + +this.je_32 + +this.je_33 + +this.je_34
      );
    },
    fs_13() {
      return (
        +this.fs_14 +
        +this.fs_15 +
        +this.fs_16 +
        +this.fs_17 +
        +this.fs_18 +
        +this.fs_19 +
        +this.fs_20 +
        +this.fs_21 +
        +this.fs_22 +
        +this.fs_23
      );
    },
    se_13() {
      return;
      +this.se_14 +
        +this.se_15 +
        +this.se_16 +
        +this.se_17 +
        +this.se_18 +
        +this.se_19 +
        +this.se_20 +
        +this.se_21 +
        +this.se_22 +
        +this.se_23;
    },
    je_13() {
      return;
      +this.je_14 +
        +this.je_15 +
        +this.je_16 +
        +this.je_17 +
        +this.je_18 +
        +this.je_19 +
        +this.je_20 +
        +this.je_21 +
        +this.je_22 +
        +this.je_23;
    }
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
 
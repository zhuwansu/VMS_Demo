import Mock from 'mockjs';
const a = [];

for (let i = 0; i < 25; i++) {
  a.push(Mock.mock({
    id: Mock.Random.id(),
    companyCode:Mock.mock('@string()'),
    companyName:Mock.mock('@ctitle(3, 5)'), 
    code:Mock.mock('@word(13)'),
    name:Mock.mock('@ctitle(3, 5)'),
    "jsfs|1": [
      "一般计税",
      "免税",
      "简易计税"
    ],
    "sfjs|1": [
      "是",
      "否",
    ],
    "sfhs|1": [
      "是",
      "否",
    ],
    "taxRate|1": [
      "0%",
      "3%",
      "6%",
      "10%",
      "16%",
    ],
    "sfjzjt|1": [
      "是",
      "否",
    ],
    "kpgz|1": [
      "增值税普通发票",
      "增值税专用发票",
      "不开票",
    ], 
    goodsCode:Mock.mock('@string()'),
    goodsName: Mock.mock('@string()'),
    rowIndex: Mock.Random.integer(0, 200),
    "tableName|1": [
      "主表",
      "附表一",
      "附表二",
      "附表三",
      "附表四",
    ],
    "isEnable|1": [
      "是",
      "否",
    ],
  }));
}

export { a };

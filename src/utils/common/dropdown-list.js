// 付款主體
const payMainOptions = [
  {
    value: 1,
    label: "付款主體1",
  },
  {
    value: 2,
    label: "付款主體2",
  },
];

// 付款型式
const payTypeOptions = [
  {
    value: 1,
    label: "General Payment",
  },
  {
    value: 2,
    label: "Special Payment",
  },
];

// 匯款對象
const paymentPerson = [
  {
    value: 1,
    label: "AAAAAA公司",
  },
  {
    value: 2,
    label: "BBBBBB公司",
  },
];

// 銀行帳號
const bankAccounts = [
  {
    value: 1,
    label: "銀行帳號_11111",
  },
  {
    value: 2,
    label: "銀行帳號_222222",
  },
  {
    value: 3,
    label: "銀行帳號_33333",
  },
];

// 付款幣別
const currentOptions = [
  {
    value: 1,
    label: "TWD",
  },
  {
    value: 2,
    label: "USD",
  },
];

// 付款條件
const conditionOptions = [
  {
    value: 1,
    label: "付款條件1111",
  },
  {
    value: 2,
    label: "付款條件2222",
  },
];

// 付款對象
const personOptions = [
  { label: "Supplier", value: 1 },
  { label: "員工", value: 2 },
];

// 發票稅款類型
const invoiceTaxTypeOptions = [
  { label: "VAT 5%", value: 1 },
  { label: "VAT 7%", value: 2 },
  { label: "VAT 10%", value: 3 },
];

// 發票形式
const invoiceTypeOptions = [
  { label: "電子發票", value: 1 },
  { label: "傳統發票", value: 2 },
  { label: "三聯單", value: 3 },
];
// Yes|No
const YNOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

// 分攤之Site
const siteOptions = [
  { label: "ARHT1", value: 1 },
  { label: "ARHT2", value: 2 },
];

// 分攤之部門
const departmentOptions = [
  { label: "IT/IT1", value: 1 },
  { label: "IT/IT2", value: 2 },
  { label: "IT/IT3", value: 3 },
];

// 專案代碼
const projectCodeOptions = [
  { label: "專案代碼-1", value: 1 },
  { label: "專案代碼-2", value: 2 },
  { label: "專案代碼-3", value: 3 },
];

// 請款原因
const reasonOptions = [
  { label: "請款原因-1", value: 1 },
  { label: "請款原因-2", value: 2 },
  { label: "請款原因-3", value: 3 },
  { label: "請款原因-4", value: 4 },
];

let getFullRouteName = () => {
  let r_name = "";
  for (let i = 0; i < treeOptions_test.length; i++) {
    if (!treeOptions_test[i].children) return;
    r_name = treeOptions_test[i].label + "/";
    treeOptions_test[i].children = treeOptions_test[i].children.map((item) => {
      return (item.label = r_name + item.label);
    });
  }
  return routes;
};

// 選擇類別
const treeOptions_test = [
  {
    id: 1,
    label: "房屋建築&廠務設施",
    icon: "folder",
    header: "noTick",
    noTick: true,
    children: [
      {
        id: 5,
        label: "A房屋建築",
        header: "noTick",
        noTick: true,
        icon: "folder",
        children: [
          { label: "A_房屋建築a1", id: 12 },
          { label: "A_房屋建築a2", id: 13 },
        ],
      },
      {
        id: 6,
        label: "B廠務設施",
        header: "noTick",
        noTick: true,
        icon: "folder",
        children: [
          { label: "B_廠務設施b1", id: 14 },
          { label: "B_廠務設施b2", id: 15 },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "稅捐及規費",
    header: "noTick",
    noTick: true,
    icon: "folder",
    children: [
      {
        id: 7,
        label: "A稅捐",
        icon: "folder",
        header: "noTick",
        noTick: true,
        children: [
          { label: "A_稅捐a1", id: 16 },
          { label: "A_稅捐a2", id: 17 },
        ],
      },
      {
        id: 8,
        label: "B規費",
        icon: "folder",
        header: "noTick",
        noTick: true,
        children: [
          { label: "B_規費b1", id: 18 },
          { label: "B_規費b2", id: 19 },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "事務性",
    header: "noTick",
    noTick: true,
    icon: "folder",
    children: [
      {
        id: 9,
        label: "事務性",
        icon: "folder",
        header: "noTick",
        noTick: true,
        children: [{ label: "A_事務性a1", id: 20 }],
      },
    ],
  },
  {
    id: 4,
    label: "資訊設備",
    header: "noTick",
    noTick: true,
    icon: "folder",
    children: [
      {
        id: 10,
        label: "公務手機",
        icon: "folder",
        header: "noTick",
        noTick: true,
        children: [
          { label: "A_房屋建築a1", id: 21 },
          { label: "A_房屋建築a2", id: 22 },
        ],
      },
      {
        id: 11,
        label: "網路設備",
        icon: "folder",
        header: "noTick",
        noTick: true,
        children: [
          { id: 23, label: "網路應用設備", icon: "folder" },
          {
            id: 24,
            label: "網路安全設備",
            icon: "folder",
            noTick: true,
            header: "noTick",
            noTick: true,
            children: [
              { id: 28, label: "防火牆", header: "input" },
              { id: 29, label: "入侵偵測", header: "input" },
              { id: 30, label: "MSN記錄器", header: "input" },
              { id: 31, label: "其他", header: "input" },
              { id: 32, label: "遠端存取", header: "input" },
              { id: 33, label: "病毒牆", header: "input" },
            ],
          },
          { id: 25, label: "網路交換器/路由器", icon: "folder" },
          {
            id: 26,
            label: "無線網路設備",
            icon: "folder",
            header: "noTick",
            noTick: true,
            children: [{ id: 34, label: "其他", header: "input" }],
          },
          {
            id: 27,
            label: "電腦耗材/消耗性硬體",
            icon: "folder",
            header: "noTick",
            noTick: true,
          },
        ],
      },
    ],
  },
];

// 選擇類別
const treeOptions = [
  {
    id: 1,
    label: "房屋建築&廠務設施",
    icon: "folder",
    noTick: true,
    children: [
      {
        id: 5,
        label: "A房屋建築",
        parent_label: "房屋建築&廠務設施 / ",
        noTick: true,
        icon: "folder",
        children: [
          {
            label: "A_房屋建築a1",
            id: 12,
            header: "input",
            parent_label: "房屋建築&廠務設施 / A房屋建築 / ",
          },
          {
            label: "A_房屋建築a2",
            id: 13,
            header: "input",
            parent_label: "房屋建築&廠務設施 / A房屋建築 / ",
          },
        ],
      },
      {
        id: 6,
        label: "B廠務設施",
        parent_label: "房屋建築&廠務設施 / ",
        noTick: true,
        icon: "folder",
        children: [
          {
            label: "B_廠務設施b1",
            id: 14,
            header: "input",
            parent_label: "房屋建築&廠務設施 / B廠務設施 / ",
          },
          {
            label: "B_廠務設施b2",
            id: 15,
            header: "input",
            parent_label: "房屋建築&廠務設施 / B廠務設施 / ",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "稅捐及規費",
    noTick: true,
    icon: "folder",
    children: [
      {
        id: 7,
        label: "A稅捐",
        icon: "folder",
        parent_label: "稅捐及規費 / ",
        noTick: true,
        children: [
          {
            label: "A_稅捐a1",
            header: "input",
            id: 16,
            parent_label: "稅捐及規費 / A稅捐 / ",
          },
          {
            label: "A_稅捐a2",
            header: "input",
            id: 17,
            parent_label: "稅捐及規費 / A稅捐 / ",
          },
        ],
      },
      {
        id: 8,
        label: "B規費",
        icon: "folder",
        parent_label: "稅捐及規費 / ",
        noTick: true,
        children: [
          {
            label: "B_規費b1",
            header: "input",
            id: 18,
            parent_label: "稅捐及規費 / B規費 / ",
          },
          {
            label: "B_規費b2",
            header: "input",
            id: 19,
            parent_label: "稅捐及規費 / B規費 / ",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "事務性",
    noTick: true,
    icon: "folder",
    children: [
      {
        id: 9,
        label: "A事務性",
        icon: "folder",
        parent_label: "事務性 / ",
        noTick: true,
        children: [
          {
            label: "A_事務性a1",
            header: "input",
            id: 20,
            parent_label: "事務性 / A事務性 / ",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "資訊設備",
    noTick: true,
    icon: "folder",
    children: [
      {
        id: 10,
        label: "公務手機",
        icon: "folder",
        parent_label: "資訊設備 / ",
        noTick: true,
        children: [
          {
            label: "公務手機a1",
            id: 21,
            header: "input",
            parent_label: "資訊設備 / 公務手機 / ",
          },
          {
            label: "公務手機a2",
            id: 22,
            header: "input",
            parent_label: "資訊設備 / 公務手機 / ",
          },
        ],
      },
      {
        id: 11,
        label: "網路設備",
        icon: "folder",
        parent_label: "資訊設備 / ",
        noTick: true,
        children: [
          {
            id: 23,
            label: "網路應用設備",
            icon: "folder",
            header: "input",
            parent_label: "資訊設備 / 網路設備 / ",
          },
          {
            id: 24,
            label: "網路安全設備",
            parent_label: "資訊設備 / 網路設備 / ",
            icon: "folder",
            noTick: true,
            children: [
              {
                id: 28,
                label: " 防火牆",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 網路安全設備 / ",
              },
              {
                id: 29,
                label: "入侵偵測",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 網路安全設備 / ",
              },
              {
                id: 30,
                label: "MSN記錄器",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 網路安全設備 / ",
              },
              {
                id: 31,
                label: "其他",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 網路安全設備 / ",
              },
              {
                id: 32,
                label: "遠端存取",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 網路安全設備 / ",
              },
              {
                id: 33,
                label: "病毒牆",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 網路安全設備 / ",
              },
            ],
          },
          {
            id: 25,
            label: "網路交換器/路由器",
            icon: "folder",
            parent_label: "資訊設備 / 網路設備 / ",
          },
          {
            id: 26,
            label: "無線網路設備",
            icon: "folder",
            noTick: true,
            parent_label: "資訊設備 / 網路設備 / ",
            children: [
              {
                id: 34,
                label: "其他",
                header: "input",
                parent_label: "資訊設備 / 網路設備 / 無線網路設備 / ",
              },
            ],
          },
          {
            id: 27,
            label: "電腦耗材/消耗性硬體",
            icon: "folder",
            header: "input",
            parent_label: "資訊設備 / 網路設備 / ",
            noTick: true,
          },
        ],
      },
    ],
  },
];

export {
  payMainOptions, // 付款主體
  payTypeOptions, // 付款型式
  personOptions, // 付款對象
  paymentPerson, // 匯款對象
  bankAccounts, // 銀行帳號
  currentOptions, // 付款幣別
  conditionOptions, // 付款條件
  invoiceTaxTypeOptions, // 發票稅款類型
  invoiceTypeOptions, // 發票形式
  YNOptions, // Yes|No
  siteOptions, // 分攤之Site
  departmentOptions, // 分攤之部門
  projectCodeOptions, // 專案代碼
  reasonOptions, // 請款原因
  treeOptions, // 選擇類別
};

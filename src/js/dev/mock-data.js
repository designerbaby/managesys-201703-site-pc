var Mock = require("./mock");

Mock.setup({
  timeout: 200
});

// 组合管理
Mock.mock(/group/, {
  "per_page": 10,
  "total": 3,
  "data": {
    1: {
      "attribute1": "备用字段",
      "attribute2": "备用字段",
      "attribute3": "备用字段",
      "attribute4": "备用字段",
      "attribute5": "备用字段",
      "buniu": 87,
      "chenbu": 12,
      "chuangsha": 5,
      "chuangshen": 41,
      "diaoqiu": 85,
      "diaosui": 54,
      "huabian1": 74,
      "huabian2": 3,
      "huabian3": 5,
      "id": 2,
      "jiegao": 23,
      "labiandai": 78,
      "liantou": 15,
      "material": [{
          "Name": '沙发绳',
          "fCategory": "工程",
          "fCost": 0,
          "fCut": "否",
          "fID": "1101-BD0007",
          "fMaterial": "外购",
          "fName": "BD8120-117",
          "fPart": 10,
          "fRetail": 20,
          "fUnit": "米",
          "fVol": "定高280",
          "id": 17,
          "url": "1.jpg"
        },
        {
          "Name": '配布花边',
          "fCategory": "停产1",
          "fCost": 0,
          "fCut": "否",
          "fID": "1101-BD0003",
          "fMaterial": "外购",
          "fName": "1080-4",
          "fPart": 10,
          "fRetail": 20,
          "fUnit": "米",
          "fVol": "定高280",
          "id": 13,
          "url": "1.jpg"
        },
        {
          "Name": '配布花边',
          "fCategory": "停产1",
          "fCost": 0,
          "fCut": "否",
          "fID": "1101-BD0003",
          "fMaterial": "外购",
          "fName": "1080-4",
          "fPart": 10,
          "fRetail": 20,
          "fUnit": "米",
          "fVol": "定高280",
          "id": 13,
          "url": "1.jpg"
        },
      ],
      "name": "777666",
      "niukou": 18,
      "peibu1": 34,
      "peibu2": 78,
      "peibu3": 54,
      "peibu4": 22,
      "peibuhuabian": 13,
      "remark": "备注",
      "shafasheng": 17,
      "style": "1",
      "xiaobiandai": 57,
      "zhidai": 4,
      "zhuankou": 24,
      "zhuantiao": 51,
      "zhubu": 65,
      "zhubuhuabian": 45
    },
    2: {
      "chuangsha": 15,
      "chuangshen": 15,
      "id": 4,
      "jiegao": 50,
      "liantou": 15,
      "material": {
        "jiegao": {
          "fCategory": "工程",
          "fCost": 0,
          "fCut": "否",
          "fID": "1101-BD0040",
          "fMaterial": "外购",
          "fName": "ZG4303兰色C13",
          "fPart": 10,
          "fRetail": 20,
          "fUnit": "米",
          "fVol": "定高280",
          "id": 50,
          "url": "1.jpg"
        },
        "chuangsha": {
          "fCategory": "工程",
          "fCost": 0,
          "fCut": "否",
          "fID": "1101-BD0005",
          "fMaterial": "外购",
          "fName": "BD8120-112",
          "fPart": 10,
          "fRetail": 20,
          "fUnit": "米",
          "fVol": "定高280",
          "id": 15,
          "url": "1.jpg"
        }
      },
      "name": "ok",
      "style": "1"
    },
    3: {
      "chuangsha": 286,
      "chuangshen": 286,
      "id": 5,
      "liantou": 7388,
      "material": {
        "chuangsha": {
          "fCategory": "停产2",
          "fCost": 0,
          "fCut": "否",
          "fID": "1101-DY0052",
          "fMaterial": "外购",
          "fName": "YSL023-17",
          "fPart": 10,
          "fRetail": 20,
          "fUnit": "米",
          "fVol": "定高280",
          "id": 286,
          "url": "1.jpg"
        }
      },
      "name": "sunshine",
      "style": "2"
    }
  },
  "current_page": 1
});

// 点亮
Mock.mock(/groupDelete/, {
  code:200
});



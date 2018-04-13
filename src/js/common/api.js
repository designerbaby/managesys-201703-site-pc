var dataType = 'json';
var timeout = 5000;
var url = 'http://caishenye2015.gnway.cc:38080';
// var url = 'http://hello.s1.natapp.cc';
// var url = 'http://172.26.40.6:8080';
// require('../dev/mock-data');
// dataType = 'json';
var request = function (opt) {
  return $.ajax({
    dataType: dataType,
    // contentType: 'application/json',
    timeout: timeout,
    url: /^http/.test(opt.url) ? opt.url : url + opt.url,
    type: opt.type || 'get',
    data: opt.data || null,
    beforeSend: function (request) {
      if (opt.header && opt.property) {
        request.setRequestHeader(opt.header, opt.property);
      }
    }
  });
};

module.exports = {

  /*
   * 后台管理系统 物料管理
   */

  // 分页得到所有原材料详细信息
  material: function (pageNum, pageSize, header, property) {
    return request({
      url: '/material',
      data: {
        pageNum: pageNum,
        pageSize: pageSize
      },
      header: header,
      property: property
    });
  },

  // 根据id获得物料详情
  materialId: function (id, header, property) {
    return request({
      url: '/material',
      data: {
        id: id
      },
      header: header,
      property: property
    });
  },

  // 原材料增加接口
  materialAdd: function (FName, FID, FMaterial, FVol, FUnit, FCost, FWidth, FHeight, FCategory, FCut, FTotal, FPart, FRetail, url) {
    return request({
      url: '/material',
      data: {
        FName: FName,
        FID: FID,
        FMaterial: FMaterial,
        FVol: FVol,
        FUnit: FUnit,
        FCost: FCost,
        FWidth: FWidth,
        FHeight: FHeight,
        FCategory: FCategory,
        FCut: FCut,
        FTotal: FTotal,
        FPart: FPart,
        FRetail: FRetail,
        url: url
      },
      header: 'post',
      property: 'insert',
      type: 'post'
    });
  },

  // 原材料图片上传接口
  materialUpload: function (picture) {
    return request({
      url: '/material',
      data: {
        picture: picture
      },
      header: 'post',
      property: 'upload',
      type: 'post'
    });
  },

  // 获取原材料图片
  materialPic: function (picture) {
    return request({
      url: '/material/pic',
      header: 'get',
      property: 'getPicture',
      data: {
        name: picture
      }
    });
  },

  // 模糊查询，用于用户填写物料
  materialDim: function (name) {
    return request({
      url: '/material',
      data: {
        name: name
      },
      header: 'get',
      property: 'getByName'
    });
  },

  // 按照name模糊搜索
  materialFName: function (FName) {
    return request({
      url: '/material',
      data: {
        FName: FName
      },
      header: 'get',
      property: 'dim'
    });
  },

  // 原材料修改接口
  materialMod: function (url) {
    return request({
      url: '/material',
      data: {
        url: url
      },
      header: 'put',
      property: 'updatePic',
      type: 'put'
    });
  },


  /*
   * 后台管理系统 组合管理
   */

  // 按页获得所有组合详情
  group: function (pageNum, pageSize) {
    return request({
      url: '/group',
      data: {
        pageNum: pageNum,
        pageSize: pageSize
      },
      header: 'get',
      property: 'getAll'
    });
  },

  // 新增组合
  groupAdd: function (conbination) {
    return request({
      url: '/group',
      data: conbination,
      type: 'post'
    });
  },

  // 删除组合
  groupDelete: function (id) {
    return request({
      url: '/group?id=' + id,
      // data: {
      //   id: id
      // },
      type: 'delete'
    });
  },

  // 根据ID获得组合的信息
  groupSubmit: function (id) {
    return request({
      url: '/group',
      data: {
        id: id
      },
      header: 'getDetail',
      property: 'getById'
    });
  },

  //  更改组合
  groupChange: function (conbination) {
    return request({
      url: '/group',
      data: conbination,
      type: 'put',
      header: 'put',
      property: 'update'
    });
  },

  // 根据风格获得组合详情
  groupStyle: function (pageNum, pageSize, style) {
    return request({
      url: '/group',
      data: {
        pageNum: pageNum,
        pageSize: pageSize,
        style: style
      },
      header: 'get',
      property: 'getByFG'
    });
  },

  // 根据组合名称获得组合详情列表
  groupName: function (pageNum, pageSize, name) {
    return request({
      url: '/group',
      data: {
        pageNum: pageNum,
        pageSize: pageSize,
        name: name
      },
      header: 'get',
      property: 'getByName'
    });
  },

  //获得全部风格信息
  style: function () {
    return request({
      url: '/style',
      header: 'get',
      property: 'getAll'
    });
  }
};

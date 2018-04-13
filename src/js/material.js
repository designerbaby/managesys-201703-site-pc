var TplMaterial = require('tpl/material/material.tpl');
var TplMaterialModal = require('tpl/material/materialModal.tpl');
var TplMaterialPage = require('tpl/material/materialPage.tpl');
var Api = require('common/api');
var tempalteHelpers = require('tpl/template-helpers');

var $jsMaterial = $('.js-material'),
  $pageNav = $('.page-nav'),
  $modalMaterial = $('#modal-material'),
  $addModalMaterial = $('#add-modal-material'),
  $modalClose = $('.modal-close'),
  $addModalClose = $('#add-modal-close'),
  $delete = $('#delete'),
  $addDelete = $('#add-delete'),
  $modalCardSubmit = $('#modal-card-submit'),
  $addModalSubmit = $('#add-modal-submit'),
  $changeSelfPrice = $('#changeSelfPrice'),
  $selfPrice = $('#selfPrice'),
  $materialStyle = $('#materialStyle'),
  $materialSearch = $('#materialSearch'),
  $searchMaterial = $('#searchMaterial'),
  $addMaterial = $('#addMaterial'),
  $materialModal = $('#materialModal'),
  $addMaterialUpload = $('#addMaterialUpload');

var pageNum = 0;
var MaxPageNum = 0;
var materialJSScript = {
  init: function () {
    this.doLoadMaterial();
    this.doBindEvent();
  },
  doLoadMaterial: function () {
    // console.log('pageNum:' ,pageNum);
    var pageSize = 10;
    var self = this;
    Api.material(pageNum, pageSize, 'get', 'getAll').then(function (json) {
      $jsMaterial.html(TplMaterial(json));
      $pageNav.html(TplMaterialPage(json));
      MaxPageNum = json.total;
    }, function (e) {
      console.log('doLoadMaterial error', e);
    });
  },
  doBindEvent: function () {
    var self = this;
    //编辑材料
    $jsMaterial.on('click', '.js-material-edit', function () {
      var dataId = 0;
      $modalMaterial.css('display', 'block');
      dataId = $(this).attr('data-id');
      Api.materialId(dataId, 'get', 'getById').then(function (json) {
        // data = json.data || {};
        console.log("materialId", json);
        $materialModal.html(TplMaterialModal(json));
      }, function (e) {
        console.log('getMaterialId error', e);
      });
    });

    //编辑材料弹框中关闭按钮
    $modalClose.on('click', function () {
      $modalMaterial.css('display', 'none');
    });

    // 增加物料弹框中关闭按钮
    $addModalClose.on('click', function () {
      $addModalMaterial.css('display', 'none');
    });

    // 增加物料弹框中关闭页面
    $addDelete.on('click', function () {
      $addModalMaterial.css('display', 'none');
    });

    // 编辑材料框中关闭页面
    $delete.on('click', function () {
      $modalMaterial.css('display', 'none');
    });

    //编辑材料框中发送确认更改请求
    $modalCardSubmit.on('click', function () {
      $modalMaterial.css('display', 'none');
      var url = $('input[name="fileMaterial"]').prop('files')[0].name;
      Api.materialMod(url).then(function (json) {
        console.log('materialMod', json);
        if (json.code == 200) {
          alert("修改图片成功");
        }
      }, function (e) {
        console.log('materialMod error', e);
      });
    });

    // 增加物料中，确认更改
    $addModalSubmit.on('click', function () {
      var FName = $("input[name='FName']").val();
      var FID = $("input[name='FID']").val();
      var FMaterial = $("input[name='FMaterial']").val();
      var FVol = $("input[name='FVol']").val();
      var FUnit = $("input[name='FUnit']").val();
      var FCost = $("input[name='FCost']").val();
      var FWidth = $("input[name='FWidth']").val();
      var FHeight = $("input[name='FHeight']").val();
      var FCategory = $("input[name='FCategory']").val();
      var FCut = $("input[name='FCut']").val();
      var FTotal = $("input[name='FTotal']").val();
      var FPart = $("input[name='FPart']").val();
      var FRetail = $("input[name='FRetail']").val();
      var url = $("input[name='url']").val();
      Api.materialAdd(FName, FID, FMaterial, FVol, FUnit, FCost, FWidth, FHeight, FCategory, FCut, FTotal, FPart, FRetail, url).then(function (json) {
        console.log('materialAdd', json);
        if (json.code == '200') {
          alert("增加物料成功");
          $addModalMaterial.css('display', 'none');
        }
      }, function (e) {
        console.log('materialAdd error', e);
      });
    });

    // 增加物料中，上传图片
    $addMaterialUpload.on('click', function () {
      self.doPictureUpload();
    });
    //修改零售价
    $changeSelfPrice.on('click', function () {

      var price = $selfPrice.val();
      var style = $materialStyle.find('option:selected').text();
      console.log(style);
      if (price == '') {
        alert("请输入零售价为出厂价的几倍")
      } else {
        Api.materialPrice(price).then(function (json) {
          // console.log("material price", json);
        }, function (e) {
          console.log('materialPrice error', e);
        })
      }
    });

    // 图片上传
    $materialModal.on('click', '.materialUpload', function () {
      self.doPictureUpload();
    });

    //搜索物料
    $searchMaterial.on('click', function () {
      var searchValue = $materialSearch.val();
      if (searchValue == '') {
        alert("请输入搜索的物料名");
      } else {
        Api.materialFName(searchValue).then(function (json) {
          console.log("materialFName", json.data);
          if (json.data.length == 0) {
            alert("没有搜索到相关数据");
          }else{
            alert('搜索到数据了,但是程序员还没做相应的处理');
          }
        }, function (e) {
          console.log('materialFName error', e);
        });
      }
    });

    //增加原材料
    $addMaterial.on('click', function () {
      $addModalMaterial.css('display', 'block');
    });

    // 返回上一页
    $pageNav.on('click', '.newer-posts',function () {
      if(pageNum == 0){
        alert("已经是第一页了");
        return false;
      }
      pageNum--;
      self.doLoadMaterial();
    });

    //下一页
    $pageNav.on('click', '.older-posts', function () {
      if(pageNum >= MaxPageNum){
        alert("已经是最后一页了");
        return false;
      }
      pageNum++;
      self.doLoadMaterial();
    });
  },
  doPictureUpload: function () {
    if (!(window.File || window.FileReader || window.FileList || window.Blob)) {
      alert('该浏览器不支持File文件，请换Chrome浏览器');
    }
    var files = $('input[name="fileMaterial"]').prop('files');
    console.log('files', files);
    if (files.length == 0) {
      alert("请选择文件");
      return;
    } else {
      var picture = files[0].name;
      console.log('picture', picture);
    }
    Api.materialUpload(picture).then(function (json) {
      console.log("materialUpload", json);
    }, function (e) {
      console.log('materialUpload error', e);
    });
  }

}


materialJSScript.init();

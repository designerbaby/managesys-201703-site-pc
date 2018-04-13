var TplGroup = require('tpl/group/group.tpl');
var Api = require('common/api');
var tempalteHelpers = require('tpl/template-helpers');

var filePostJSScript = {
  init: function () {
    this.doUpLoader();
  },
  doUpLoader: function () {
    var uploader = WebUploader.create({

      // swf文件路径
      swf: BASE_URL + '/js/Uploader.swf',

      // 文件接收服务端。
      server: 'http://caishenye2015.gnway.cc:38080',

      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      pick: '#picker',

      // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      resize: false
    });
  }
}


filePostJSScript.init();

var TplGroup = require('tpl/group/group.tpl');
var Api = require('common/api');
var tempalteHelpers = require('tpl/template-helpers');
var $swiperWrapper = $('#swiper-wrapper'),
  $groupBox = $('#group-box'),
  $groupSearch = $('#group-search'),
  $inputGroupName = $('#input-group-name'),
  $groupStyle = $('#group-style'),
  $groupTabs = $('.group-tabs'),
  $groupSubmit = $('#group-submit'),
  $addGroupModal = $('#add-group-modal');
  $changeGroupModal = $('#change-group-modal'),
  $modalCardSubmit = $('#modal-card-submit'),
  $modalCardSubmitChange = $('#modal-card-submit-change'),
  $addGroupForm = $('#add-group-form'),
  $changeGroupForm = $('#change-group-form'),
  $groupAuto = $('.group-auto'),
  $autoGroup = $('.auto-group');

var groupJSScript = {
  init: function () {
    this.doLoadGroup();
    this.onClickEvent();
    // this.autocomplete();
  },
  doLoadGroup: function () {
    var pageNum = 1;
    var pageSize = 3;
    var self = this;
    Api.group(pageNum, 10).then(function (json) {
      console.log(json);
      $swiperWrapper.html(TplGroup(json));
      self.newSwiper();
    }, function (e) {
      console.log('doLoadGroup error', e);
    });
  },
  onClickEvent: function () {
    var self = this;

    //根据当前的组合名称进行查找
    $groupSearch.on('click', function () {
      var name = $inputGroupName.val();
      console.log("name", name);
      Api.groupName(1, 10, name).then(function (json) {
        console.log("groupName", json.data);
        if (self.isEmptyObject(json.data)) {
          alert("没有搜索到相关数据");
        } else {
          alert('搜索到数据了,但是程序员还没做相应的处理');
        }
      }, function (e) {
        console.log('groupName error', e);
      });
    });

    // 根据风格进行搜索展示
    $groupStyle.change(function () {
      var styleGroup = {
        '全部': '0',
        '美式': '12',
        '欧式': '1',
        '哥特式': '2',
        '法式': '3',
        '中式': '4',
        '新中式': '5',
        '现代': '6',
        '后现代': '7',
        '低奢': '8',
        '儿童': '9',
        '田园': '10',
        '地中海': '11',
      };
      var getAllStyleData = self.getAllStyle();
      console.log("getAllStyleData", getAllStyleData);
      var style = $(this).find('option:selected').text();
      var styleId = styleGroup[style];
      console.log("style", styleGroup[style]);
      Api.groupStyle(1, 10, styleId).then(function (json) {
        console.log("groupStyle", self.isEmptyObject(json.data));
        if (!self.isEmptyObject(json.data)) {
          alert('没有相应的样式风格哦！');
        } else {
          alert('此处还没有进行相应风格的渲染');
        }
      }, function (e) {
        console.log('groupStyle error', e);
      });
    });

    // 新增组合
    $groupTabs.on('click', '.group-add', function () {
      // 加载新增组合的弹框
      $addGroupModal.css('display', 'block');
    });

    //新增组合，发送确认按钮
    $modalCardSubmit.on('click', function () {
      var conbination = self.serializeJson($addGroupForm);
      // console.log("conbination", conbination);
      Api.groupAdd(conbination).then(function (json) {
        console.log("groupAdd", json);
        if (json.code == "200") {
          alert("发送请求成功");
          $addGroupModal.css('display', 'none');
          self.doLoadGroup();
        }
      }, function (e) {
        console.log('groupAdd error', e);
      });
    });

    // 删除组合
    $swiperWrapper.on('click', '.group-delete', function () {
      // 加载新增组合的弹框
      var id = $(this).attr('data-id');
      Api.groupDelete(id).then(function (json) {
        console.log("groupDelete", json);
        if (json.code == '200') {
          alert("删除组合成功");
          self.doLoadGroup();
        }
      }, function (e) {
        console.log('groupDelete error', e);
      });
    });

    // 修改组合
    $swiperWrapper.on('click', '.group-change', function () {
      $changeGroupModal.css('display', 'block');
    });

    // 修改组合中确认修改
    $modalCardSubmitChange.on('click', function () {
      var conbination = self.serializeJson($changeGroupForm);
      console.log("conbination", JSON.stringify(conbination));
      Api.groupChange(JSON.stringify(conbination)).then(function (json) {
        console.log("groupChange", json);
        if (json.code == 200) {
          alert("修改数组成功");
          $changeGroupModal.css('display', 'none');
          self.doLoadGroup();
        }
      }, function (e) {
        console.log('groupChange error', e);
      });
    });

    $addGroupModal.on('click', '.modal-close', function () {
      $addGroupModal.css('display', 'none');
    });

    $addGroupModal.on('click', '.delete', function () {
      $addGroupModal.css('display', 'none');
    });

    $changeGroupModal.on('click', '.modal-close', function () {
      $changeGroupModal.css('display', 'none');
    });

    $changeGroupModal.on('click', '.delete', function () {
      $changeGroupModal.css('display', 'none');
    });

    var name = "";
    $groupAuto.autocomplete({
      source: function (request, response) {
        $.ajax({
          url: 'http://172.26.40.6:8080/material',
          dataType: 'json',
          beforeSend: function (request) {
            request.setRequestHeader('get', 'getByName');
          },
          success: function (data) {
            console.log(data);
          }
        });
      }
    });

  },
  // 根据ID获得组合的信息
  onIdLoadGroup: function (id) {

    Api.groupSubmit(id).then(function (json) {
      console.log("groupSubmit", json);
    }, function (e) {
      console.log('groupSubmit error', e);
    });
  },

  serializeJson: function (groupForm) {
    var o = {};
    var a = groupForm.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
      return o;
    });
    return o;
  },

  newSwiper: function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      speed: 300,
      // grabCursor: true,
      lazyLoading: true,
      // effect: 'coverflow', // 动画效果
      paginationType: 'fraction',
      pagination: '.swiper-pagination',
      threshold: 70,
      autoHeight: true, // 自动高度
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
  },

  isEmptyObject: function (e) {
    var t;
    for (t in e)
      return !1;
    return !0;
  },

  getAllStyle: function () {
    var data = [];
    Api.style().then(function (json) {
      console.log("getAllStyle", json);
      data = json.data;
    }, function (e) {
      console.log('groupSubmit error', e);
    });
    return data;
  }

  // autocomplete: function (name) {
  //   // $autoGroup.autocomplete({
  //   //   serviceUrl: 'http://172.26.40.6:8080/material/name=' + name,
  //   //   onSelect: function (suggestion) {
  //   //     console.log('You selected' + suggestion.value + ',' + suggestion.data);
  //   //   }
  //   // });
  //   $.ajax({
  //     type: 'post',
  //     url: 'http://172.26.40.6:8080/material/name=' + name,
  //     dataType: 'json',
  //     success: function(msg){
  //       $('.auto-group').autocomplete(msg,{
  //         functionMatch : function(row){
  //           console.log(row);
  //         }
  //       })
  //     }
  //   })
  // }
}


groupJSScript.init();


                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1769I7rzhGc6NrMq0S+gft', 'Alert');
// scripts/prefabs/Alert.js

"use strict";

var Alert = {
  _alert: null,
  // prefab
  _detailLabel: null,
  // 内容
  _cancelButton: null,
  // 确定按钮
  _enterButton: null,
  // 取消按钮
  _enterCallBack: null,
  // 回调事件
  _animSpeed: 0.3 // 动画速度

};
/**
 * detailString :   内容 string 类型.
 * enterCallBack:   确定点击事件回调  function 类型.
 * neeCancel:       是否展示取消按钮 bool 类型 default YES.
 * duration:        动画速度 default = 0.3.
*/

Alert.show = function (detailString, enterCallBack, needCancel, animSpeed) {
  // 引用
  var self = this; // 判断

  if (Alert._alert != undefined) return; // 

  Alert._animSpeed = animSpeed ? animSpeed : Alert._animSpeed; // 加载 prefab 创建

  cc.loader.loadRes("Alert", cc.Prefab, function (error, prefab) {
    if (error) {
      cc.error(error);
      return;
    } // 实例 


    var alert = cc.instantiate(prefab); // Alert 持有

    Alert._alert = alert; // 动画 

    var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
    var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
    self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed, 255), cc.scaleTo(Alert._animSpeed, 1.0)), cbFadeIn);
    self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed, 0), cc.scaleTo(Alert._animSpeed, 2.0)), cbFadeOut); // 获取子节点

    Alert._detailLabel = cc.find("alertBackground/detailLabel", alert).getComponent(cc.Label);
    Alert._cancelButton = cc.find("alertBackground/cancelButton", alert);
    Alert._enterButton = cc.find("alertBackground/enterButton", alert); // 添加点击事件

    Alert._enterButton.on('click', self.onButtonClicked, self);

    Alert._cancelButton.on('click', self.onButtonClicked, self); // 父视图


    Alert._alert.parent = cc.find("Canvas"); // 展现 alert

    self.startFadeIn(); // 参数

    self.configAlert(detailString, enterCallBack, needCancel, animSpeed);
  }); // 参数

  self.configAlert = function (detailString, enterCallBack, needCancel, animSpeed) {
    // 回调
    Alert._enterCallBack = enterCallBack; // 内容

    Alert._detailLabel.string = detailString; // 是否需要取消按钮

    if (needCancel || needCancel == undefined) {
      // 显示
      Alert._cancelButton.active = true;
    } else {
      // 隐藏
      Alert._cancelButton.active = false;
      Alert._enterButton.x = 0;
    }
  }; // 执行弹进动画


  self.startFadeIn = function () {
    cc.eventManager.pauseTarget(Alert._alert, true);
    Alert._alert.position = cc.p(0, 0);

    Alert._alert.setScale(2);

    Alert._alert.opacity = 0;

    Alert._alert.runAction(self.actionFadeIn);
  }; // 执行弹出动画


  self.startFadeOut = function () {
    cc.eventManager.pauseTarget(Alert._alert, true);

    Alert._alert.runAction(self.actionFadeOut);
  }; // 弹进动画完成回调


  self.onFadeInFinish = function () {
    cc.eventManager.resumeTarget(Alert._alert, true);
  }; // 弹出动画完成回调


  self.onFadeOutFinish = function () {
    self.onDestory();
  }; // 按钮点击事件


  self.onButtonClicked = function (event) {
    if (event.target.name == "enterButton") {
      if (self._enterCallBack) {
        self._enterCallBack();
      }
    }

    self.startFadeOut();
  }; // 销毁 alert (内存管理还没搞懂，暂且这样写吧~v~)


  self.onDestory = function () {
    Alert._alert.destroy();

    Alert._enterCallBack = null;
    Alert._alert = null;
    Alert._detailLabel = null;
    Alert._cancelButton = null;
    Alert._enterButton = null;
    Alert._animSpeed = 0.3;
  };
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ByZWZhYnMvQWxlcnQuanMiXSwibmFtZXMiOlsiQWxlcnQiLCJfYWxlcnQiLCJfZGV0YWlsTGFiZWwiLCJfY2FuY2VsQnV0dG9uIiwiX2VudGVyQnV0dG9uIiwiX2VudGVyQ2FsbEJhY2siLCJfYW5pbVNwZWVkIiwic2hvdyIsImRldGFpbFN0cmluZyIsImVudGVyQ2FsbEJhY2siLCJuZWVkQ2FuY2VsIiwiYW5pbVNwZWVkIiwic2VsZiIsInVuZGVmaW5lZCIsImNjIiwibG9hZGVyIiwibG9hZFJlcyIsIlByZWZhYiIsImVycm9yIiwicHJlZmFiIiwiYWxlcnQiLCJpbnN0YW50aWF0ZSIsImNiRmFkZU91dCIsImNhbGxGdW5jIiwib25GYWRlT3V0RmluaXNoIiwiY2JGYWRlSW4iLCJvbkZhZGVJbkZpbmlzaCIsImFjdGlvbkZhZGVJbiIsInNlcXVlbmNlIiwic3Bhd24iLCJmYWRlVG8iLCJzY2FsZVRvIiwiYWN0aW9uRmFkZU91dCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsIm9uIiwib25CdXR0b25DbGlja2VkIiwicGFyZW50Iiwic3RhcnRGYWRlSW4iLCJjb25maWdBbGVydCIsInN0cmluZyIsImFjdGl2ZSIsIngiLCJldmVudE1hbmFnZXIiLCJwYXVzZVRhcmdldCIsInBvc2l0aW9uIiwicCIsInNldFNjYWxlIiwib3BhY2l0eSIsInJ1bkFjdGlvbiIsInN0YXJ0RmFkZU91dCIsInJlc3VtZVRhcmdldCIsIm9uRGVzdG9yeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHO0FBQ1JDLEVBQUFBLE1BQU0sRUFBRSxJQURBO0FBQ2dCO0FBQ3hCQyxFQUFBQSxZQUFZLEVBQUksSUFGUjtBQUVnQjtBQUN4QkMsRUFBQUEsYUFBYSxFQUFHLElBSFI7QUFHZ0I7QUFDeEJDLEVBQUFBLFlBQVksRUFBSSxJQUpSO0FBSWdCO0FBQ3hCQyxFQUFBQSxjQUFjLEVBQUUsSUFMUjtBQUtnQjtBQUN4QkMsRUFBQUEsVUFBVSxFQUFNLEdBTlIsQ0FNZ0I7O0FBTmhCLENBQVo7QUFTQTs7Ozs7OztBQU1BTixLQUFLLENBQUNPLElBQU4sR0FBYSxVQUFVQyxZQUFWLEVBQXdCQyxhQUF4QixFQUF1Q0MsVUFBdkMsRUFBbURDLFNBQW5ELEVBQThEO0FBRXZFO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQVgsQ0FIdUUsQ0FLdkU7O0FBQ0EsTUFBSVosS0FBSyxDQUFDQyxNQUFOLElBQWdCWSxTQUFwQixFQUErQixPQU53QyxDQVF2RTs7QUFDQWIsRUFBQUEsS0FBSyxDQUFDTSxVQUFOLEdBQW1CSyxTQUFTLEdBQUdBLFNBQUgsR0FBZVgsS0FBSyxDQUFDTSxVQUFqRCxDQVR1RSxDQVd2RTs7QUFDQVEsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJGLEVBQUUsQ0FBQ0csTUFBOUIsRUFBc0MsVUFBVUMsS0FBVixFQUFpQkMsTUFBakIsRUFBeUI7QUFFM0QsUUFBSUQsS0FBSixFQUFXO0FBQ1BKLE1BQUFBLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTQSxLQUFUO0FBQ0E7QUFDSCxLQUwwRCxDQU8zRDs7O0FBQ0EsUUFBSUUsS0FBSyxHQUFHTixFQUFFLENBQUNPLFdBQUgsQ0FBZUYsTUFBZixDQUFaLENBUjJELENBVTNEOztBQUNBbkIsSUFBQUEsS0FBSyxDQUFDQyxNQUFOLEdBQWVtQixLQUFmLENBWDJELENBYTNEOztBQUNBLFFBQUlFLFNBQVMsR0FBR1IsRUFBRSxDQUFDUyxRQUFILENBQVlYLElBQUksQ0FBQ1ksZUFBakIsRUFBa0NaLElBQWxDLENBQWhCO0FBQ0EsUUFBSWEsUUFBUSxHQUFHWCxFQUFFLENBQUNTLFFBQUgsQ0FBWVgsSUFBSSxDQUFDYyxjQUFqQixFQUFpQ2QsSUFBakMsQ0FBZjtBQUNBQSxJQUFBQSxJQUFJLENBQUNlLFlBQUwsR0FBb0JiLEVBQUUsQ0FBQ2MsUUFBSCxDQUFZZCxFQUFFLENBQUNlLEtBQUgsQ0FBU2YsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVOUIsS0FBSyxDQUFDTSxVQUFoQixFQUE0QixHQUE1QixDQUFULEVBQTJDUSxFQUFFLENBQUNpQixPQUFILENBQVcvQixLQUFLLENBQUNNLFVBQWpCLEVBQTZCLEdBQTdCLENBQTNDLENBQVosRUFBMkZtQixRQUEzRixDQUFwQjtBQUNBYixJQUFBQSxJQUFJLENBQUNvQixhQUFMLEdBQXFCbEIsRUFBRSxDQUFDYyxRQUFILENBQVlkLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTZixFQUFFLENBQUNnQixNQUFILENBQVU5QixLQUFLLENBQUNNLFVBQWhCLEVBQTRCLENBQTVCLENBQVQsRUFBeUNRLEVBQUUsQ0FBQ2lCLE9BQUgsQ0FBVy9CLEtBQUssQ0FBQ00sVUFBakIsRUFBNkIsR0FBN0IsQ0FBekMsQ0FBWixFQUF5RmdCLFNBQXpGLENBQXJCLENBakIyRCxDQW1CM0Q7O0FBQ0F0QixJQUFBQSxLQUFLLENBQUNFLFlBQU4sR0FBcUJZLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUSw2QkFBUixFQUF1Q2IsS0FBdkMsRUFBOENjLFlBQTlDLENBQTJEcEIsRUFBRSxDQUFDcUIsS0FBOUQsQ0FBckI7QUFDQW5DLElBQUFBLEtBQUssQ0FBQ0csYUFBTixHQUFzQlcsRUFBRSxDQUFDbUIsSUFBSCxDQUFRLDhCQUFSLEVBQXdDYixLQUF4QyxDQUF0QjtBQUNBcEIsSUFBQUEsS0FBSyxDQUFDSSxZQUFOLEdBQXFCVSxFQUFFLENBQUNtQixJQUFILENBQVEsNkJBQVIsRUFBdUNiLEtBQXZDLENBQXJCLENBdEIyRCxDQXdCM0Q7O0FBQ0FwQixJQUFBQSxLQUFLLENBQUNJLFlBQU4sQ0FBbUJnQyxFQUFuQixDQUFzQixPQUF0QixFQUErQnhCLElBQUksQ0FBQ3lCLGVBQXBDLEVBQXFEekIsSUFBckQ7O0FBQ0FaLElBQUFBLEtBQUssQ0FBQ0csYUFBTixDQUFvQmlDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDeEIsSUFBSSxDQUFDeUIsZUFBckMsRUFBc0R6QixJQUF0RCxFQTFCMkQsQ0E0QjNEOzs7QUFDQVosSUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFxQyxNQUFiLEdBQXNCeEIsRUFBRSxDQUFDbUIsSUFBSCxDQUFRLFFBQVIsQ0FBdEIsQ0E3QjJELENBK0IzRDs7QUFDQXJCLElBQUFBLElBQUksQ0FBQzJCLFdBQUwsR0FoQzJELENBa0MzRDs7QUFDQTNCLElBQUFBLElBQUksQ0FBQzRCLFdBQUwsQ0FBaUJoQyxZQUFqQixFQUErQkMsYUFBL0IsRUFBOENDLFVBQTlDLEVBQTBEQyxTQUExRDtBQUVILEdBckNELEVBWnVFLENBbUR2RTs7QUFDQUMsRUFBQUEsSUFBSSxDQUFDNEIsV0FBTCxHQUFtQixVQUFVaEMsWUFBVixFQUF3QkMsYUFBeEIsRUFBdUNDLFVBQXZDLEVBQW1EQyxTQUFuRCxFQUE4RDtBQUU3RTtBQUNBWCxJQUFBQSxLQUFLLENBQUNLLGNBQU4sR0FBdUJJLGFBQXZCLENBSDZFLENBSzdFOztBQUNBVCxJQUFBQSxLQUFLLENBQUNFLFlBQU4sQ0FBbUJ1QyxNQUFuQixHQUE0QmpDLFlBQTVCLENBTjZFLENBTzdFOztBQUNBLFFBQUlFLFVBQVUsSUFBSUEsVUFBVSxJQUFJRyxTQUFoQyxFQUEyQztBQUFFO0FBQ3pDYixNQUFBQSxLQUFLLENBQUNHLGFBQU4sQ0FBb0J1QyxNQUFwQixHQUE2QixJQUE3QjtBQUNILEtBRkQsTUFFTztBQUFHO0FBQ04xQyxNQUFBQSxLQUFLLENBQUNHLGFBQU4sQ0FBb0J1QyxNQUFwQixHQUE2QixLQUE3QjtBQUNBMUMsTUFBQUEsS0FBSyxDQUFDSSxZQUFOLENBQW1CdUMsQ0FBbkIsR0FBdUIsQ0FBdkI7QUFDSDtBQUNKLEdBZEQsQ0FwRHVFLENBb0V2RTs7O0FBQ0EvQixFQUFBQSxJQUFJLENBQUMyQixXQUFMLEdBQW1CLFlBQVk7QUFDM0J6QixJQUFBQSxFQUFFLENBQUM4QixZQUFILENBQWdCQyxXQUFoQixDQUE0QjdDLEtBQUssQ0FBQ0MsTUFBbEMsRUFBMEMsSUFBMUM7QUFDQUQsSUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWE2QyxRQUFiLEdBQXdCaEMsRUFBRSxDQUFDaUMsQ0FBSCxDQUFLLENBQUwsRUFBUSxDQUFSLENBQXhCOztBQUNBL0MsSUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWErQyxRQUFiLENBQXNCLENBQXRCOztBQUNBaEQsSUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFnRCxPQUFiLEdBQXVCLENBQXZCOztBQUNBakQsSUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFpRCxTQUFiLENBQXVCdEMsSUFBSSxDQUFDZSxZQUE1QjtBQUNILEdBTkQsQ0FyRXVFLENBNkV2RTs7O0FBQ0FmLEVBQUFBLElBQUksQ0FBQ3VDLFlBQUwsR0FBb0IsWUFBWTtBQUM1QnJDLElBQUFBLEVBQUUsQ0FBQzhCLFlBQUgsQ0FBZ0JDLFdBQWhCLENBQTRCN0MsS0FBSyxDQUFDQyxNQUFsQyxFQUEwQyxJQUExQzs7QUFDQUQsSUFBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWFpRCxTQUFiLENBQXVCdEMsSUFBSSxDQUFDb0IsYUFBNUI7QUFDSCxHQUhELENBOUV1RSxDQW1GdkU7OztBQUNBcEIsRUFBQUEsSUFBSSxDQUFDYyxjQUFMLEdBQXNCLFlBQVk7QUFDOUJaLElBQUFBLEVBQUUsQ0FBQzhCLFlBQUgsQ0FBZ0JRLFlBQWhCLENBQTZCcEQsS0FBSyxDQUFDQyxNQUFuQyxFQUEyQyxJQUEzQztBQUNILEdBRkQsQ0FwRnVFLENBd0Z2RTs7O0FBQ0FXLEVBQUFBLElBQUksQ0FBQ1ksZUFBTCxHQUF1QixZQUFZO0FBQy9CWixJQUFBQSxJQUFJLENBQUN5QyxTQUFMO0FBQ0gsR0FGRCxDQXpGdUUsQ0E2RnZFOzs7QUFDQXpDLEVBQUFBLElBQUksQ0FBQ3lCLGVBQUwsR0FBdUIsVUFBU2lCLEtBQVQsRUFBZTtBQUNsQyxRQUFHQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixJQUFxQixhQUF4QixFQUFzQztBQUNsQyxVQUFHNUMsSUFBSSxDQUFDUCxjQUFSLEVBQXVCO0FBQ25CTyxRQUFBQSxJQUFJLENBQUNQLGNBQUw7QUFDSDtBQUNKOztBQUNETyxJQUFBQSxJQUFJLENBQUN1QyxZQUFMO0FBQ0gsR0FQRCxDQTlGdUUsQ0F1R3ZFOzs7QUFDQXZDLEVBQUFBLElBQUksQ0FBQ3lDLFNBQUwsR0FBaUIsWUFBWTtBQUN6QnJELElBQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhd0QsT0FBYjs7QUFDQXpELElBQUFBLEtBQUssQ0FBQ0ssY0FBTixHQUF1QixJQUF2QjtBQUNBTCxJQUFBQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxJQUFmO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0UsWUFBTixHQUFxQixJQUFyQjtBQUNBRixJQUFBQSxLQUFLLENBQUNHLGFBQU4sR0FBc0IsSUFBdEI7QUFDQUgsSUFBQUEsS0FBSyxDQUFDSSxZQUFOLEdBQXFCLElBQXJCO0FBQ0FKLElBQUFBLEtBQUssQ0FBQ00sVUFBTixHQUFtQixHQUFuQjtBQUNILEdBUkQ7QUFTSCxDQWpIRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFsZXJ0ID0ge1xuICAgIF9hbGVydDogbnVsbCwgICAgICAgICAgIC8vIHByZWZhYlxuICAgIF9kZXRhaWxMYWJlbDogICBudWxsLCAgIC8vIOWGheWuuVxuICAgIF9jYW5jZWxCdXR0b246ICBudWxsLCAgIC8vIOehruWumuaMiemSrlxuICAgIF9lbnRlckJ1dHRvbjogICBudWxsLCAgIC8vIOWPlua2iOaMiemSrlxuICAgIF9lbnRlckNhbGxCYWNrOiBudWxsLCAgIC8vIOWbnuiwg+S6i+S7tlxuICAgIF9hbmltU3BlZWQ6ICAgICAwLjMsICAgIC8vIOWKqOeUu+mAn+W6plxufTtcblxuLyoqXG4gKiBkZXRhaWxTdHJpbmcgOiAgIOWGheWuuSBzdHJpbmcg57G75Z6LLlxuICogZW50ZXJDYWxsQmFjazogICDnoa7lrprngrnlh7vkuovku7blm57osIMgIGZ1bmN0aW9uIOexu+Weiy5cbiAqIG5lZUNhbmNlbDogICAgICAg5piv5ZCm5bGV56S65Y+W5raI5oyJ6ZKuIGJvb2wg57G75Z6LIGRlZmF1bHQgWUVTLlxuICogZHVyYXRpb246ICAgICAgICDliqjnlLvpgJ/luqYgZGVmYXVsdCA9IDAuMy5cbiovXG5BbGVydC5zaG93ID0gZnVuY3Rpb24gKGRldGFpbFN0cmluZywgZW50ZXJDYWxsQmFjaywgbmVlZENhbmNlbCwgYW5pbVNwZWVkKSB7XG5cbiAgICAvLyDlvJXnlKhcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyDliKTmlq1cbiAgICBpZiAoQWxlcnQuX2FsZXJ0ICE9IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgLy8gXG4gICAgQWxlcnQuX2FuaW1TcGVlZCA9IGFuaW1TcGVlZCA/IGFuaW1TcGVlZCA6IEFsZXJ0Ll9hbmltU3BlZWQ7XG5cbiAgICAvLyDliqDovb0gcHJlZmFiIOWIm+W7ulxuICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiQWxlcnRcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZXJyb3IsIHByZWZhYikge1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a6e5L6LIFxuICAgICAgICB2YXIgYWxlcnQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuXG4gICAgICAgIC8vIEFsZXJ0IOaMgeaciVxuICAgICAgICBBbGVydC5fYWxlcnQgPSBhbGVydDtcblxuICAgICAgICAvLyDliqjnlLsgXG4gICAgICAgIHZhciBjYkZhZGVPdXQgPSBjYy5jYWxsRnVuYyhzZWxmLm9uRmFkZU91dEZpbmlzaCwgc2VsZik7XG4gICAgICAgIHZhciBjYkZhZGVJbiA9IGNjLmNhbGxGdW5jKHNlbGYub25GYWRlSW5GaW5pc2gsIHNlbGYpO1xuICAgICAgICBzZWxmLmFjdGlvbkZhZGVJbiA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyhBbGVydC5fYW5pbVNwZWVkLCAyNTUpLCBjYy5zY2FsZVRvKEFsZXJ0Ll9hbmltU3BlZWQsIDEuMCkpLCBjYkZhZGVJbik7XG4gICAgICAgIHNlbGYuYWN0aW9uRmFkZU91dCA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyhBbGVydC5fYW5pbVNwZWVkLCAwKSwgY2Muc2NhbGVUbyhBbGVydC5fYW5pbVNwZWVkLCAyLjApKSwgY2JGYWRlT3V0KTtcblxuICAgICAgICAvLyDojrflj5blrZDoioLngrlcbiAgICAgICAgQWxlcnQuX2RldGFpbExhYmVsID0gY2MuZmluZChcImFsZXJ0QmFja2dyb3VuZC9kZXRhaWxMYWJlbFwiLCBhbGVydCkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgQWxlcnQuX2NhbmNlbEJ1dHRvbiA9IGNjLmZpbmQoXCJhbGVydEJhY2tncm91bmQvY2FuY2VsQnV0dG9uXCIsIGFsZXJ0KTtcbiAgICAgICAgQWxlcnQuX2VudGVyQnV0dG9uID0gY2MuZmluZChcImFsZXJ0QmFja2dyb3VuZC9lbnRlckJ1dHRvblwiLCBhbGVydCk7XG5cbiAgICAgICAgLy8g5re75Yqg54K55Ye75LqL5Lu2XG4gICAgICAgIEFsZXJ0Ll9lbnRlckJ1dHRvbi5vbignY2xpY2snLCBzZWxmLm9uQnV0dG9uQ2xpY2tlZCwgc2VsZik7XG4gICAgICAgIEFsZXJ0Ll9jYW5jZWxCdXR0b24ub24oJ2NsaWNrJywgc2VsZi5vbkJ1dHRvbkNsaWNrZWQsIHNlbGYpO1xuXG4gICAgICAgIC8vIOeItuinhuWbvlxuICAgICAgICBBbGVydC5fYWxlcnQucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKTtcblxuICAgICAgICAvLyDlsZXnjrAgYWxlcnRcbiAgICAgICAgc2VsZi5zdGFydEZhZGVJbigpO1xuXG4gICAgICAgIC8vIOWPguaVsFxuICAgICAgICBzZWxmLmNvbmZpZ0FsZXJ0KGRldGFpbFN0cmluZywgZW50ZXJDYWxsQmFjaywgbmVlZENhbmNlbCwgYW5pbVNwZWVkKTtcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICAvLyDlj4LmlbBcbiAgICBzZWxmLmNvbmZpZ0FsZXJ0ID0gZnVuY3Rpb24gKGRldGFpbFN0cmluZywgZW50ZXJDYWxsQmFjaywgbmVlZENhbmNlbCwgYW5pbVNwZWVkKSB7XG5cbiAgICAgICAgLy8g5Zue6LCDXG4gICAgICAgIEFsZXJ0Ll9lbnRlckNhbGxCYWNrID0gZW50ZXJDYWxsQmFjaztcblxuICAgICAgICAvLyDlhoXlrrlcbiAgICAgICAgQWxlcnQuX2RldGFpbExhYmVsLnN0cmluZyA9IGRldGFpbFN0cmluZztcbiAgICAgICAgLy8g5piv5ZCm6ZyA6KaB5Y+W5raI5oyJ6ZKuXG4gICAgICAgIGlmIChuZWVkQ2FuY2VsIHx8IG5lZWRDYW5jZWwgPT0gdW5kZWZpbmVkKSB7IC8vIOaYvuekulxuICAgICAgICAgICAgQWxlcnQuX2NhbmNlbEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgeyAgLy8g6ZqQ6JePXG4gICAgICAgICAgICBBbGVydC5fY2FuY2VsQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgQWxlcnQuX2VudGVyQnV0dG9uLnggPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIOaJp+ihjOW8uei/m+WKqOeUu1xuICAgIHNlbGYuc3RhcnRGYWRlSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5wYXVzZVRhcmdldChBbGVydC5fYWxlcnQsIHRydWUpO1xuICAgICAgICBBbGVydC5fYWxlcnQucG9zaXRpb24gPSBjYy5wKDAsIDApO1xuICAgICAgICBBbGVydC5fYWxlcnQuc2V0U2NhbGUoMik7XG4gICAgICAgIEFsZXJ0Ll9hbGVydC5vcGFjaXR5ID0gMDtcbiAgICAgICAgQWxlcnQuX2FsZXJ0LnJ1bkFjdGlvbihzZWxmLmFjdGlvbkZhZGVJbik7XG4gICAgfTtcblxuICAgIC8vIOaJp+ihjOW8ueWHuuWKqOeUu1xuICAgIHNlbGYuc3RhcnRGYWRlT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIucGF1c2VUYXJnZXQoQWxlcnQuX2FsZXJ0LCB0cnVlKTtcbiAgICAgICAgQWxlcnQuX2FsZXJ0LnJ1bkFjdGlvbihzZWxmLmFjdGlvbkZhZGVPdXQpO1xuICAgIH07XG5cbiAgICAvLyDlvLnov5vliqjnlLvlrozmiJDlm57osINcbiAgICBzZWxmLm9uRmFkZUluRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5ldmVudE1hbmFnZXIucmVzdW1lVGFyZ2V0KEFsZXJ0Ll9hbGVydCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIOW8ueWHuuWKqOeUu+WujOaIkOWbnuiwg1xuICAgIHNlbGYub25GYWRlT3V0RmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uRGVzdG9yeSgpO1xuICAgIH07XG5cbiAgICAvLyDmjInpkq7ngrnlh7vkuovku7ZcbiAgICBzZWxmLm9uQnV0dG9uQ2xpY2tlZCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm5hbWUgPT0gXCJlbnRlckJ1dHRvblwiKXtcbiAgICAgICAgICAgIGlmKHNlbGYuX2VudGVyQ2FsbEJhY2spe1xuICAgICAgICAgICAgICAgIHNlbGYuX2VudGVyQ2FsbEJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnN0YXJ0RmFkZU91dCgpO1xuICAgIH07XG5cbiAgICAvLyDplIDmr4EgYWxlcnQgKOWGheWtmOeuoeeQhui/mOayoeaQnuaHgu+8jOaaguS4lOi/meagt+WGmeWQp352filcbiAgICBzZWxmLm9uRGVzdG9yeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQWxlcnQuX2FsZXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgQWxlcnQuX2VudGVyQ2FsbEJhY2sgPSBudWxsO1xuICAgICAgICBBbGVydC5fYWxlcnQgPSBudWxsO1xuICAgICAgICBBbGVydC5fZGV0YWlsTGFiZWwgPSBudWxsO1xuICAgICAgICBBbGVydC5fY2FuY2VsQnV0dG9uID0gbnVsbDtcbiAgICAgICAgQWxlcnQuX2VudGVyQnV0dG9uID0gbnVsbDtcbiAgICAgICAgQWxlcnQuX2FuaW1TcGVlZCA9IDAuMztcbiAgICB9O1xufTtcblxuXG4iXX0=
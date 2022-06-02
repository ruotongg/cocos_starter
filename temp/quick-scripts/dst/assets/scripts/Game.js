
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34939MOoVhPcoQPnmN4x3//', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    //这个属性引用了星星预置资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    //星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    //地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    //Player节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //获取地平面的y轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; //初始化计时器

    this.timer = 0;
    this.starDuration = 0; //生成一个新的星星

    this.spawnNewStar(); //初始化计分

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    //使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); //将新增的节点添加到Canvas节点下面

    this.node.addChild(newStar); //为星星设计一个随机位置

    newStar.setPosition(this.getNewStarPosition()); //在星星脚本组件上保存Game对象的引用

    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; //根据地平面位置和主角跳跃高度，随机得到一个星星的y坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; //根据屏幕宽度，随机得到一个星星的x坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; //返回星星坐标

    return cc.v2(randX, randY);
  },
  start: function start() {},
  update: function update(dt) {
    //每帧更新计时器，超过限度还没生成新的星星则调用失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; //更新scoreDisplay的文字

    this.scoreDisplay.string = 'Score: ' + this.score; //播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    //停止Player节点的跳跃动作
    this.player.stopAllActions(); //重新加载场景game

    cc.director.loadScene('game');
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdhbWVPdmVyIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVMsSUFERjtBQUVQQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRixLQWpCSDtB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QixDQUVoQjs7QUFDQSxTQUFLWCxZQUFMLENBQWtCaUMsTUFBbEIsR0FBeUIsWUFBVSxLQUFLdEIsS0FBeEMsQ0FIZ0IsQ0FLaEI7O0FBQ0F2QixJQUFBQSxFQUFFLENBQUM4QyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS2pDLFVBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0FuSEk7QUFxSEw2QixFQUFBQSxRQUFRLEVBQUMsb0JBQVU7QUFDZjtBQUNBLFNBQUtoQyxNQUFMLENBQVlxQyxjQUFaLEdBRmUsQ0FJZjs7QUFDQWhELElBQUFBLEVBQUUsQ0FBQ2lELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNIO0FBM0hJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvL+i/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOe9rui1hOa6kFxyXG4gICAgICAgIHN0YXJQcmVmYWI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL+aYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcblxyXG4gICAgICAgIC8v5Zyw6Z2i6IqC54K577yM55So5LqO56Gu5a6a5pif5pif55Sf5oiQ55qE6auY5bqmXHJcbiAgICAgICAgZ3JvdW5kOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vUGxheWVy6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXHJcbiAgICAgICAgcGxheWVyOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNjb3JlRGlzcGxheTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2NvcmVBdWRpbzp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL+iOt+WPluWcsOW5s+mdoueahHnovbTlnZDmoIdcclxuICAgICAgICB0aGlzLmdyb3VuZFk9dGhpcy5ncm91bmQueSt0aGlzLmdyb3VuZC5oZWlnaHQvMjtcclxuICAgICAgICAvL+WIneWni+WMluiuoeaXtuWZqFxyXG4gICAgICAgIHRoaXMudGltZXI9MDtcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbj0wO1xyXG5cclxuICAgICAgICAvL+eUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAgICAgLy/liJ3lp4vljJborqHliIZcclxuICAgICAgICB0aGlzLnNjb3JlPTA7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjpmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v5L2/55So57uZ5a6a55qE5qih5p2/5Zyo5Zy65pmv5Lit55Sf5oiQ5LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgdmFyIG5ld1N0YXI9Y2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcclxuICAgICAgICAvL+WwhuaWsOWinueahOiKgueCuea3u+WKoOWIsENhbnZhc+iKgueCueS4i+mdolxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvL+S4uuaYn+aYn+iuvuiuoeS4gOS4qumaj+acuuS9jee9rlxyXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIC8v5Zyo5pif5pif6ISa5pys57uE5Lu25LiK5L+d5a2YR2FtZeWvueixoeeahOW8leeUqFxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZT10aGlzO1xyXG5cclxuICAgICAgICAvLyDph43nva7orqHml7blmajvvIzmoLnmja7mtojlpLHml7bpl7TojIPlm7Tpmo/mnLrlj5bkuIDkuKrlgLxcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHJhbmRYPTA7XHJcbiAgICAgICAgLy/moLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoR55Z2Q5qCHXHJcbiAgICAgICAgdmFyIHJhbmRZPXRoaXMuZ3JvdW5kWStNYXRoLnJhbmRvbSgpKnRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCs1MDtcclxuICAgICAgICAvL+agueaNruWxj+W5leWuveW6pu+8jOmaj+acuuW+l+WIsOS4gOS4quaYn+aYn+eahHjlnZDmoIdcclxuICAgICAgICB2YXIgbWF4WD10aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWD0oTWF0aC5yYW5kb20oKS0wLjUpKjIqbWF4WDtcclxuICAgICAgICAvL+i/lOWbnuaYn+aYn+WdkOagh1xyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCxyYW5kWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL+avj+W4p+abtOaWsOiuoeaXtuWZqO+8jOi2hei/h+mZkOW6pui/mOayoeeUn+aIkOaWsOeahOaYn+aYn+WImeiwg+eUqOWksei0pemAu+i+kVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyPnRoaXMuc3RhckR1cmF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyKz1kdDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FpblNjb3JlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zY29yZSs9MTtcclxuICAgICAgICAvL+abtOaWsHNjb3JlRGlzcGxheeeahOaWh+Wtl1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZz0nU2NvcmU6ICcrdGhpcy5zY29yZTtcclxuXHJcbiAgICAgICAgLy/mkq3mlL7lvpfliIbpn7PmlYhcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbyxmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVPdmVyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/lgZzmraJQbGF5ZXLoioLngrnnmoTot7Pot4PliqjkvZxcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xyXG5cclxuICAgICAgICAvL+mHjeaWsOWKoOi9veWcuuaZr2dhbWVcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
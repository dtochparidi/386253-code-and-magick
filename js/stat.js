  'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 25;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.font = "16px PT Mono";
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

  var colors = ['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255,' + getRandom(0.3, 1) + ')', 'rgba(0, 0, 255,' + getRandom(0.3, 1) + ')', 'rgba(0, 0, 255,' + getRandom(0.3, 1) + ')'];

  var graphCenter = (CLOUD_X + CLOUD_WIDTH / 2) - ((players.length * (BAR_WIDTH + GAP * 2)) - GAP * 2) / 2;

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], graphCenter + (BAR_WIDTH + GAP * 2) * i, CLOUD_HEIGHT + CLOUD_Y - GAP / 2);
    ctx.fillText( Math.round(times[i]), graphCenter + (BAR_WIDTH + GAP * 2) * i, (CLOUD_HEIGHT + CLOUD_Y - GAP - GAP) + (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = colors[i];
    ctx.fillRect(graphCenter + (BAR_WIDTH + GAP * 2) * i, CLOUD_HEIGHT + CLOUD_Y - GAP - GAP / 2, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
  }
};

// Typed.js
  const options = {
    strings: [
          "当小黑子🐔🏀",
          "当三月七的狗😌",
          "当赛博 MtF 🏳️‍⚧️",
          "我！（）！打钱！",
          "我要玩艾斯爱慕💔",
          "吃电子补佳乐🍥",
          "香泥乐！牢大！😭",
          "男同和我坐挨😋🥵",
          "我要睡觉zzzzzzzz💤",
          "永远不会给你上，永远不会让你下，永远不会跑圈圈然后沙漠你~",
          "......?"
    ],
    typeSpeed: 100,
    loop: true,
    startDelay: 500,
  };

  const typed = new Typed('#typed', options);

// 随机年龄
// 使用 Fitten Code 人工智能编写
document.addEventListener('DOMContentLoaded', function () {
  let timer;  // 声明一个变量来保存定时器ID
  function updateRandomAge() {
    var randomAge = Math.random() * (114.514 - 2.5) + 2.5;
    document.getElementById("randomAge").textContent = randomAge.toFixed(3); // 如果你想保留1位小数
    clearTimeout(timer);  // 清除之前的定时器
    timer = setTimeout(updateRandomAge, 50);  // 更新定时器
  }

  updateRandomAge();  // 首次调用
});

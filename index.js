const { Wecom } = require ("wecom");
const schedule = require("node-schedule");
// 初始化企业微信对象
const wecom = new Wecom({
    corpId: 'ww2ce3cc6f92104735',
    corpSecret: 'XS3MBU382VpFP4nJmxPHWN23FXiYUI2ukYZiGP-AjrI',
  });
  

  const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('* * */2 * * *', () => {
        // 发送消息
  wecom.request({
    url: "/message/send",
    method: "POST",
    // 发送消息的参数参照 [（官方文档）](https://work.weixin.qq.com/api/doc/90000/90135/90236) [（API 文档）]()
    data: {
      touser: "@all",
      msgtype: "text",
      agentid:  '1000002',
      text: {
        content: "现在是"+ new Date() +"你该休息啦！",
      },
    },
  });
        console.log('scheduleCronstyle:' + new Date());
    });
}

scheduleCronstyle();
console.log('Start successfully');

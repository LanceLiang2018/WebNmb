var H = H || {};
H.addModule = function(str) {
  var arr = str.split("."),
    o = H,
    i;
  for (i = (arr[0] == "GLOBAL") ? 1 : 0; i < arr.length; i++) {
    o[arr[i]] = o[arr[i]] || {};
    o = o[arr[i]];
  }
};
H.addModule("Xhr");
H.addModule("Storage");
H.addModule("BlackList");
H.addModule("Quote");
H.addModule("Comment");
H.addModule("Cookie");
H.addModule("DownloadManager");
H.addModule("GifParser");
H.addModule("ImportExport");
H.addModule("Page");
H.addModule("WebSql");
H.addModule("IndexedDB");
H.addModule("Sketchpad");
H.addModule("Util");

H.StorageFolder = "nimingban";
H.Config = {
  "uniqueid": "config",
  "site": "hacfun",
  "appFontSize": 60,
  "imglessMode": false,
  "nightMode": false,
  "backupFrequency": 7,
  "saveReadPosition": true,
  "splitView": false,
  "blockTime": 24,
  "favorPerPage": 20,
  "commentPerPage": 40,
  "feedPerPage": 20,
  "threadPerPage": 19,
  "searchResultPerPage": 20,
  "maxDownloadNumber": 5,
  "showSage": true,
  "showCite": true,
  "waterMark": true,
  "enableTabBar": true,
  "enableTransition": true,
  "navigateTo": 3,
  "sensitivity": 5,
  "coolDown": 5000,
  "minWidth": 400,
  "minHeight": 400,
  "width": 640,
  "height": 640,
  "isAppstoreReview": false,
  "homepage": -1
  // "homepage": 11
};
H.Common = {
  emoji: {"emo1":"|∀ﾟ","emo2":"(´ﾟДﾟ`)","emo3":"(;´Д`)","emo4":"(｀･ω･)","emo5":"(=ﾟωﾟ)=","emo6":"| ω・´)","emo7":"|-` )","emo8":"|д` )","emo9":"|ー` )","emo10":"|∀` )","emo11":"(つд⊂)","emo12":"(ﾟДﾟ≡ﾟДﾟ)","emo13":"(＾o＾)ﾉ","emo14":"(|||ﾟДﾟ)","emo15":"( ﾟ∀ﾟ)","emo16":"( ´∀`)","emo17":"(*´∀`)","emo18":"(*ﾟ∇ﾟ)","emo19":"(*ﾟーﾟ)","emo20":"(　ﾟ 3ﾟ)","emo21":"( ´ー`)","emo22":"( ・_ゝ・)","emo23":"( ´_ゝ`)","emo24":"(*´д`)","emo25":"(・ー・)","emo26":"(・∀・)","emo27":"(ゝ∀･)","emo28":"(〃∀〃)","emo29":"(*ﾟ∀ﾟ*)","emo30":"( ﾟ∀。)","emo31":"( `д´)","emo32":"(`ε´ )","emo33":"(`ヮ´ )","emo34":"σ`∀´)","emo35":" ﾟ∀ﾟ)σ","emo36":"ﾟ ∀ﾟ)ノ","emo37":"(╬ﾟдﾟ)","emo38":"(|||ﾟдﾟ)","emo39":"( ﾟдﾟ)","emo40":"Σ( ﾟдﾟ)","emo41":"( ;ﾟдﾟ)","emo42":"( ;´д`)","emo43":"(　д ) ﾟ ﾟ","emo44":"( ☉д⊙)","emo45":"(((　ﾟдﾟ)))","emo46":"( ` ・´)","emo47":"( ´д`)","emo48":"( -д-)","emo49":"(>д<)","emo50":"･ﾟ( ﾉд`ﾟ)","emo51":"( TдT)","emo52":"(￣∇￣)","emo53":"(￣3￣)","emo54":"(￣ｰ￣)","emo55":"(￣ . ￣)","emo56":"(￣皿￣)","emo57":"(￣艸￣)","emo58":"(￣︿￣)","emo59":"(￣︶￣)","emo60":"ヾ(´ωﾟ｀)","emo61":"(*´ω`*)","emo62":"(・ω・)","emo63":"( ´・ω)","emo64":"(｀・ω)","emo65":"(´・ω・`)","emo66":"(`・ω・´)","emo67":"( `_っ´)","emo68":"( `ー´)","emo69":"( ´_っ`)","emo70":"( ´ρ`)","emo71":"( ﾟωﾟ)","emo72":"(oﾟωﾟo)","emo73":"(　^ω^)","emo74":"(｡◕∀◕｡)","emo75":"/( ◕‿‿◕ )\\","emo76":"ヾ(´ε`ヾ)","emo77":"(ノﾟ∀ﾟ)ノ","emo78":"(σﾟдﾟ)σ","emo79":"(σﾟ∀ﾟ)σ","emo80":"|дﾟ )","emo81":"┃電柱┃","emo82":"ﾟ(つд`ﾟ)","emo83":"ﾟÅﾟ )　","emo84":"⊂彡☆))д`)","emo85":"⊂彡☆))д´)","emo86":"⊂彡☆))∀`)","emo87":"(´∀((☆ミつ","emo88":"( ´_ゝ`)旦"},
  loadingText: ["友谊魔法加载中", "人，是会思考的芦苇——帕斯卡，《思想录》", "开放包容，理性客观，有事说事，就事论事", "我赵日天并不服！", "晒妹会被SAGE哟，晒姐酌情", "来杯淡定红茶( ´_ゝ`)", "诸君→朱军→董卿", "赛，赛程安排！", "排，排球比赛！", "接 龙 大 成 功", "稀……干……", "仙客来根雕", "保安！病栋里的病人跑出来了！", "小刘，喂公子吃药", "小刘，6床加大用药量", "刘星打完夏东海，满头大汉", "Z(ﾟ∀。)Z Walk like an egyptian", "不要误会，我不是针对你，我是说……", "我是说，在座的各位都是肥宅", "我是说，在座的肥宅都是乐色", "My Little Pony, My Little Pony, Ah~", "一男子由于笑里藏刀，导致面部多处割伤", "旅馆大酬宾", "旅长爱搞基", "Duang的一下，就加载出来了", "寂寞了？画个可爱的女朋友吧", "没时间解释了！快上车！", "你不能让我加载，我就马上加载", "想歪的自重，这是芦苇！", "Wow, so doge, much cute, many moe", "再也没有什么不能淡定的了（ ´_ゝ`)", "UCCU等待加载的样子真是丑陋 ﾟ∀ﾟ)σ", "你听说过把妹公式吗？", "求和 、羁、飞马都会被碎饼干哟", "食我大雕辣(つд⊂)", "世界上没什么比爱的力量更强大，除了...", "齐齐蛤尔σ`∀´)", "总有一天你们会看着我画的东西撸！", "听说,下雨天三文鱼和叉烧酱更配哦", "冷漠得肥宅", "鉴你个面包！", "我淡淡地说，这是信仰", "你没几天好蹦跶了", "丞相 手 棺材——你TM倒是发个图啊", "这里是独裁岛，不爽不要玩(＾o＾)ﾉ", "你完了，猴子*眼小", "可是朱云心里明白", "加qq337845818逆天改命", "请认准唯一qq41888438", "炫酷红名，十元每月（大雾）", "是在下输了（抱拳）", "小姐，请问有没有卖半岛鸡盒", "服务员，来一份手撕逼", "今天岛上没有智障", "人生最好的五年，我都干什么了啊！", "为二次元献出心脏！", "三管不过冈", "事到如今就别再给我装什么正义人士了", "你们整天鉴婊鉴婊能找到媳妇吗", "为我们的友谊干杯", "在下弗了（抱拳）", "贰叁叁叁叁", "注意（白）字多义", "为了照顾智商不如蟑螂的虫族选手", "当你刷A岛很卡时，你很火大", "你有你的张起灵，我有我的芦苇酱", "貳叁叁叁", "齐齐蛤尔（注意“蛤”字多义）", "我是理性的机器", "天下尴共十尬，君独占八尬", "这个月A岛多了26只白羊，你有什么头绪吗？", "我刷A岛只有一个原则，那就是", "无图言雕，A岛白养你了", "实际上上一周我都在外地并且", "我坠入黑暗，没有了光", "君日本语本当上手", "领导夹菜我转桌", "我狗比酱今日便是要打爆你喵喵酱的狗头", "【版规】飞马会被碎饼干哟", "【版规】严禁张贴他人隐私资料，引战、造谣砍串封IP", "【版规】禁止发表商业广告、推广链接和宣传QQ群", "【版规】使用本网站是一种特权而不是权利", "【版规】管理员有权片面决定删除或保留留言", "【版规】禁止污言辱骂、人身攻击", "【版规】禁止地域攻击、露点色情", "【版规】禁止民族政治、邪教犯罪、毒品自杀", "【版规】禁止张贴他人隐私资料、造谣传谣"],
  game: [{
    title: "Trex",
    src: "game/trex/index.html",
    poster: "",
    emoji: " "
  }, {
    title: "E国侵略者",
    src: "http://cover.acfunwiki.org/KE/index.html",
    poster: "",
    emoji: " "
  }, {
    title: "是芦苇就下100层",
    src: "http://cover.acfunwiki.org/lwdown/index.html",
    poster: "",
    emoji: " "
  }],
  tabbarList: [{
    "name": "分享",
    "icon": "icon-share",
    "order": 1,
    "action": "share"
  }, {
    "name": "跳页",
    "icon": "icon-navigate",
    "order": 2,
    "action": "navigate"
  }, {
    "name": "收藏",
    "icon": "icon-add-favorite",
    "order": 3,
    "action": "addFavorite"
  }, {
    "name": "下载",
    "icon": "icon-download",
    "order": 4,
    "action": "download"
  }, {
    "name": "回复",
    "icon": "icon-reply",
    "action": "reply"
  }, {
    "name": "举报",
    "icon": "icon-report",
    "action": "report"
  }, {
    "name": "刷新",
    "icon": "icon-refresh",
    "action": "refresh"
  }],
};
H.Nimingban = {
  hacfun: {
    api: {
      title: "A岛匿名版",
      titleShort: "A岛",
      appid: "e31c86032f0d607c",
      host: "https://adnmb.com",
      domain: "adnmb.com",
      staticHost: "https://adnmb.com",
      staticDomain: "https://adnmb.com",
      staticDomainShort: "adnmb.com",
      core:{
        api: "Api",
        forum: "Api/showf",
        thread: "Api/thread",
        cdn: [
          "https://nmbimg.fastmirror.org",
          "http://nmbimg.fastmirror.org",
          "https://nmb.fastmirror.org",
          "https://adnmb.com"
        ],
        getBackupUrl:"Home/Api/backupUrl",
        getCdnPath: "Api/getCdnPath",
        quote: "Home/Forum/ref",
        feed: "Api/feed",
        subscribe: "Api/addFeed",
        unsubscribe: "Api/delFeed",
        upvote: "Home/Forum/upvote",
        downvote: "Home/Forum/downvote",
        replyThread: "Home/Forum/doReplyThread.html",
        postThread: "Home/Forum/doPostThread.html",
        search: "Api/Search",
        timeline: "Api/timeline",
        forumlist2: "Api/getForumList",
      },
      web:{
        forum: "https://adnmb2.com/f",
        thread: "https://adnmb2.com/t",
      },
      admin:{
        adminLogin: "Admin/Public/login.html",
        sage: "Admin/Content/sagePost/id",
        edit: "Admin/Content/updateThread/id",
        delPost: "Admin/Content/delPost/ids",
        banip: "Home/Forum/banip/id",
        banCookie: "Home/Forum/banCookie/id",
        searchCookie: "Admin/Content/thread/cookieuser",
        queryUser: "Admin/Member/queryUser",
      },
      notification: "http://cover.acfunwiki.org/nmb-notice.json",
      forumlist: "http://cover.acfunwiki.org/cn.json",
      luwei: "http://cover.acfunwiki.org/luwei.json",
      luwei2: "http://cover.acfunwiki.org/luwei.json",
    },
    forumlist: [{"id":"-1","name":"时间线","showName":"","fgroup":"4"},{"id":"4","name":"综合版1","showName":"","fgroup":"4"},{"id":"20","name":"欢乐恶搞","showName":"","fgroup":"4"},{"fgroup":"4","id":"121","name":"速报2","showName":"速报2<font style='color:#f00'>New!</font>"},{"id":"11","name":"推理","showName":"推理(脑洞)","fgroup":"4"},{"fgroup":"4","id":"111","name":"跑团","showName":"跑团"},{"id":"30","name":"技术宅","showName":"技术(IT)","fgroup":"4"},{"id":"32","name":"料理","showName":"美食<font style='color:#fff'>(汪版)</font>","fgroup":"4"},{"id":"40","name":"貓版","showName":"喵版","fgroup":"4"},{"id":"35","name":"音乐","showName":"","fgroup":"4"},{"id":"56","name":"考试","showName":"学业(校园)","fgroup":"4"},{"fgroup":"4","id":"110","name":"社畜","showName":"社畜"},{"id":"15","name":"科学","showName":"科学(理学)","fgroup":"4"},{"id":"103","name":"文学","showName":"文学(推书)","fgroup":"4"},{"id":"17","name":"二次创作","showName":"绘画涂鸦(二创)","fgroup":"4"},{"id":"98","name":"姐妹1","showName":"姐妹(淑女)","fgroup":"4"},{"id":"75","name":"数码","showName":"","fgroup":"4"},{"id":"97","name":"女装","showName":"女装(时尚)","fgroup":"4"},{"id":"89","name":"日记","showName":"日记(树洞)","fgroup":"4"},{"id":"96","name":"圈内","showName":"","fgroup":"4"},{"id":"81","name":"都市怪谈","showName":"","fgroup":"4"},{"id":"106","name":"买买买","showName":"买买买","fgroup":"4"},{"id":"14","name":"动画","showName":"","fgroup":"1"},{"id":"12","name":"漫画","showName":"","fgroup":"1"},{"id":"90","name":"美漫","showName":"美漫(小马)","fgroup":"1"},{"id":"99","name":"国漫","showName":"","fgroup":"1"},{"id":"19","name":"小说","showName":"小说(连载)","fgroup":"1"},{"id":"87","name":"轻小说","showName":"","fgroup":"1"},{"id":"64","name":"GALGAME","showName":"","fgroup":"1"},{"id":"5","name":"东方Project","showName":"","fgroup":"1"},{"id":"93","name":"舰娘","showName":"","fgroup":"1"},{"id":"101","name":"LoveLive","showName":"","fgroup":"1"},{"id":"6","name":"VOCALOID","showName":"","fgroup":"1"},{"id":"2","name":"游戏","showName":"游戏综合版","fgroup":"3"},{"id":"72","name":"DNF","showName":"","fgroup":"3"},{"fgroup":"3","id":"124","name":"SE","showName":"Square-Enix"},{"id":"3","name":"手游","showName":"手游","fgroup":"3"},{"id":"107","name":"Steam","showName":"Steam","fgroup":"3"},{"id":"24","name":"索尼","showName":"","fgroup":"3"},{"id":"22","name":"LOL","showName":"","fgroup":"3"},{"id":"70","name":"DOTA","showName":"DOTA","fgroup":"3"},{"id":"38","name":"口袋妖怪","showName":"精灵宝可梦","fgroup":"3"},{"id":"86","name":"战争雷霆","showName":"","fgroup":"3"},{"id":"51","name":"WOT","showName":"坦克战机战舰世界","fgroup":"3"},{"id":"10","name":"Minecraft","showName":"","fgroup":"3"},{"id":"28","name":"怪物猎人","showName":"","fgroup":"3"},{"id":"108","name":"3A游戏","showName":"3A游戏","fgroup":"3"},{"fgroup":"3","id":"119","name":"彩虹六号","showName":"彩虹六号<font style='color:#f00'>New!</font>"},{"id":"23","name":"暴雪游戏","showName":"暴雪游戏<font color=\"red\">New!</font>","fgroup":"3"},{"id":"45","name":"卡牌桌游","showName":"","fgroup":"3"},{"id":"34","name":"MUG","showName":"音乐游戏","fgroup":"3"},{"id":"29","name":"AC大逃杀","showName":"","fgroup":"3"},{"id":"25","name":"任天堂","showName":"","fgroup":"3"},{"id":"16","name":"AKB","showName":"日本偶像(AKB)","fgroup":"8"},{"id":"100","name":"SNH48","showName":"中国偶像(SNH)","fgroup":"8"},{"id":"13","name":"COSPLAY","showName":"眼科(Cosplay)","fgroup":"8"},{"id":"55","name":"声优","showName":"","fgroup":"8"},{"id":"39","name":"模型","showName":"模型(手办)","fgroup":"8"},{"id":"31","name":"影视","showName":"电影/电视","fgroup":"5"},{"id":"54","name":"摄影","showName":"","fgroup":"5"},{"id":"37","name":"军武","showName":"","fgroup":"5"},{"id":"33","name":"体育","showName":"体育","fgroup":"5"},{"id":"18","name":"值班室","showName":"","fgroup":"6"},{"fgroup":"6","id":"112","name":"城墙","showName":""},{"fgroup":"6","id":"117","name":"技术支持","showName":""},{"fgroup":"1","id":"114","name":"询问3","showName":"询问3"},{"fgroup":"1","id":"118","name":"宠物","showName":"宠物<font color=\"red\">New!</font>"},{"fgroup":"1","id":"115","name":"摄影2","showName":"摄影2"},{"fgroup":"8","id":"116","name":"主播","showName":"主播<font color='green'>(苇Tuber)</font>"},{"fgroup":"4","id":"113","name":"育儿","showName":"育儿"},{"fgroup":"1","id":"120","name":"围炉","showName":"综合2(围炉)<font color=\"red\">New!</font>"},{"fgroup":"4","id":"125","name":"旅行","showName":"旅行<font color=\"red\">New!</font>"},{"fgroup":"1","id":"9","name":"特摄","showName":"特摄<font color=\"red\">New!</font>"}],
    frequentlyVisited: [{"id":"114373","name":"淡定红茶"},{"id":"49607","name":"这是芦苇"},{"id":"553505","name":"二次元女友"},{"id":"585784","name":"丧尸图鉴"},{"id":"117617","name":"壁纸楼"},{"id":"103123","name":"足控福利"},{"id":"234446","name":"胸器福利"},{"id":"55255","name":"黑妹"},{"id":"328934","name":"总有一天"},{"id":"1738904","name":"赵日天"},{"id":"5739391","name":"什么鬼"},{"id":"6736209","name":"荒野探索"}],
    cookieKey: "userhash"
  },
  beitai: {
    api: {
      title: "备胎岛",
      titleShort: "备胎岛",
      appid: "e31c86032f0d607c",
      host: "https://tnmb.org",
      domain: "tnmb.org",
      staticHost: "https://tnmb.org",
      staticDomain: "tnmb.org",
      staticDomainShort: "tnmb.org",
      core:{
        api: "Api",
        forum: "Api/showf",
        thread: "Api/thread",
        cdn: [
          "http://tnmbstatic.fastmirror.org/Public/Upload",
          "https://tnmb.org/Public/Upload",
          "http://tnmb-org.n1.yun.tf:8999/Public/Upload",
          "http://ano-zhai-so.n1.yun.tf:8999/Public/Upload"
        ],
        getCdnPath: "Api/getCdnPath",
        cookie: "Api/getCookie",
        quote: "Home/Forum/ref",
        feed: "Api/feed",
        subscribe: "Api/addFeed",
        unsubscribe: "Api/delFeed",
        upvote: "Home/Forum/upvote",
        downvote: "Home/Forum/downvote",
        replyThread: "Home/Forum/doReplyThread.html",
        postThread: "Home/Forum/doPostThread.html",
        search: "Api/Search",
        timeline: "Api/timeline",
        forumlist2: "Api/getForumList",
      },
      web:{
        forum: "https://tnmb.org/f",
        thread: "https://tnmb.org/t",
      },
      admin:{
        adminLogin: "Admin/Public/login.html",
        sage: "Admin/Content/sagePost/id",
        edit: "Admin/Content/updateThread/id",
        delPost: "Admin/Content/delPost/ids",
        banip: "Home/Forum/banip/id",
        banCookie: "Home/Forum/banCookie/id",
        searchCookie: "Admin/Content/thread/cookieuser"
      },
      notification: "http://cover.acfunwiki.org/nmb-notice.json",
      forumlist: "http://cover.acfunwiki.org/cn.json",
      luwei: "http://cover.acfunwiki.org/luwei.json",
      luwei2: "http://yuanwowo.coding.me/yuanwowo/luwei.json",
    },
    forumlist: [{"id":"-1","name":"时间线"},{"id":"1","name":"综合"},{"id":"2","name":"技术"},{"id":"3","name":"二次创作"},{"id":"4","name":"动画漫画"},{"id":"5","name":"值班室"},{"id":"6","name":"游戏"},{"id":"7","name":"欢乐恶搞"},{"id":"11","name":"小说"},{"id":"13","name":"数码音乐"},{"id":"14","name":"射影"},{"id":"15","name":"都市怪谈"},{"id":"17","name":"支援1"},{"id":"18","name":"基佬"},{"id":"19","name":"姐妹2"},{"id":"20","name":"日记"},{"id":"21","name":"美食(汪版)"},{"id":"22","name":"喵版"},{"id":"23","name":"社畜"},{"id":"24","name":"车万养老院"},{"id":"25","name":"买买买"}],
    frequentlyVisited: [],
    cookieKey: "userhash"
  }
}

H.AppReview = {
  "forumlist": [{"id":"11","fgroup":"4","name":"推理","showName":""},{"id":"15","name":"科学","showName":"科学(理学)","fgroup":"4"},{"id":"32","fgroup":"4","name":"料理","showName":"料理"},{"id":"40","fgroup":"4","name":"貓版","showName":"喵版"},{"name":"买买买","lock":false,"id":106},{"id":"31","fgroup":"5","name":"影视","showName":"电影/电视"},{"id":"33","fgroup":"5","name":"体育","showName":""},{"id":"19","fgroup":"1","name":"小说","showName":"小说(连载)"},{"id":"34","fgroup":"3","name":"MUG","showName":"音乐游戏"},{"id":"100","fgroup":"8","name":"SNH48","showName":"SNH48"},{"id":"38","fgroup":"3","name":"口袋妖怪","showName":""},{"id":"107","name":"Steam","showName":"Steam","fgroup":"3"},{"id":"25","name":"任天堂","showName":"","fgroup":"3"},{"id":"29","name":"AC大逃杀","showName":"","fgroup":"3"},{"id":"18","fgroup":"6","name":"值班室","showName":""}],
  "frequentlyVisited": [{"id":"114373","name":"淡定红茶"},{"id":"49607","name":"这是芦苇"},{"id":"553505","name":"二次元女友"}],
  "loadingText": ["友谊魔法加载中", "晒妹会被SAGE哟，晒姐酌情", "飞马会被碎饼干哟", "赛，赛程安排！", "排，排球比赛！", "仙客来根雕", "小刘，喂公子吃药", "Z(ﾟ∀。)Z Walk like an egyptian", "My Little Pony, My Little Pony, Ah~", "一男子由于笑里藏刀，导致面部多处割伤", "没时间解释了！快上车！", "你不能让我加载，我就马上加载", "想歪的自重，这是芦苇！", "是在下输了（抱拳）", "Wow, so doge, much cute, many moe", "再也没有什么不能淡定的了（ ´_ゝ`)"]
}
import HotelTypes from './HotelTypes'
import TripElements from './TripElements'
import FoodElements from './FoodElements'
import TravelWays from './TravelWays'
import TripLocations from './TripLocations'
import TripDayInfos from './TripDayInfos'
import { Languages, Levels } from './Languages'
import flattenMessages from '../utils/flattenMessages'
import CustomPhases from './CustomPhases'
import SiteElements from './SiteElements'

export default {
  parentLocale: 'zh',
  'nav.home': '首頁',
  'nav.todo': '待辦',
  'nav.language': '語言',
  'nav.feature': '產品特色',
  'nav.wonderful': '精采案例',

  'nav.customize': '客製旅程',
  'nav.customize.customize': '客製旅程',
  'nav.customize.myCustomTrip': '我的旅程',

  'nav.user': '會員',
  'nav.user.login': '登入',
  'nav.user.register': '註冊',
  'nav.user.profile': '會員中心',
  'nav.user.logout': '登出',

  'nav.trip': '提供旅程',
  'nav.trip.createSite': '建立景點',
  'nav.trip.manageSite': '管理景點',
  'nav.trip.createTrip': '建立旅程',
  'nav.trip.manageTrip': '管理旅程',
  'nav.trip.myOrder': '我的訂單',

  'page.first': '第一頁',
  'page.prev': '上一頁',
  'page.next': '下一頁',
  'page.last': '最後一頁',

  'trip.createTrip': '建立旅程',
  'trip.createTrip.intro': '旅程簡介',
  'trip.createTrip.branch': '景點規劃',
  'trip.createTrip.image': '封面圖片',
  'trip.createTrip.preview': '預覽',
  'trip.createTrip.finish': '完成',
  'trip.createTrip.help': '貼心小建議',
  'trip.createTrip.mySite': '我的景點',
  'trip.createTrip.form.name': '旅程名稱',
  'trip.createTrip.form.price': '服務費',
  'trip.createTrip.form.dayInfo': '天數',

  customize: '客製旅程',
  'customize.createDemand': '建立需求',
  'customize.chooseGuide': '選擇導遊',
  'customize.guideConfirm': '導遊確認',
  'customize.deposit': '預付訂金',
  'customize.chooseDate': '選擇時段',
  'customize.finishConfirm': '完成確認',
  'customize.balance': '完成付款',
  'customize.travel': '出遊',
  'customize.chooseGuide.comment': '請根據您選擇的導遊清單排定志願序' +
  '（滑鼠拖曳改變志願序）位於較上方的導遊將越優先選擇。',
  'customize.chooseGuide.star': '評價',
  'customize.chooseGuide.detail': '詳細資訊',
  'customize.chooseGuide.confirm': '確定順序',
  'customize.guideConfirm.comment1': '您好，我們已將您的旅乘客製化需求傳達給導遊！',
  'customize.guideConfirm.comment2': '等待導遊確認您的客製化需求。',
  'customize.guideConfirm.comment3': '如果目前導遊無法替您規劃，系統將自動為您詢問下一位導遊。',
  'customize.guideConfirm.location': '地點',
  'customize.guideConfirm.hobby': '興趣',
  'customize.guideConfirm.language': '語言',
  'customize.chooseDate.comment': '請填寫您有空的時段，導遊將安排視訊時間與您討論旅程規劃',
  'customize.chooseDate.startTime': '開始時間',
  'customize.chooseDate.endTime': '結束時間',
  'customize.chooseDate.createTime': '+ 建立時段',
  'customize.chooseDate.confirm': '確定時段',
  'customize.finishConfirm.comment': '您好，請確認 完成視訊 或者 再約一次視訊 。',
  'customize.finishConfirm.again.comment': '因為旅途中有細節尚未確認，所以我想要再視訊一次。',
  'customize.finishConfirm.ok.comment': '已規劃完成，我要付款。',
  'customize.finishConfirm.videoTime': '視訊時間',
  'customize.travel.comment': '恭喜您！旅程已規劃完成，Deeperience 祝你有個愉快的旅行！',
  'customize.travel.advice': '導遊評價',
  'customize.travel.advice.star': '星等',
  'customize.travel.advice.send': '送出評價',
  'customize.travel.fbShare': 'FB分享',

  'order.outline': '客製需求',
  'order.recvDeposit': '收取訂金',
  'order.video': '安排視訊',
  'order.customize': '客製旅程',
  'order.preview': '預覽旅程',
  'order.recvBalance': '收取尾款',
  'order.done': '完成交易',
  'order.outline.travelerData': '旅人資料',
  'order.outline.demand': '客製需求',
  'order.outline.people': '出遊人數',
  'order.outline.location': '旅遊地點',
  'order.outline.time': '旅遊時間',
  'order.outline.tripElement': '旅程元素',
  'order.outline.foodElement': '美食元素',
  'order.outline.hotelType': '旅館型態',
  'order.outline.residentFee': '旅館預算（NT/天）',
  'order.outline.foodFee': '美食預算（NT/天）',
  'order.outline.tripFee': '旅程預算（NT/天）',
  'order.outline.isHotel': '是否代訂旅館？',
  'order.outline.isAirplane': '是否代訂機票？',
  'order.outline.otherDemand': '其它需求',
  'order.outline.disagree': '放棄規劃',
  'order.outline.agree': '同意規劃',
  'order.deposit.waitPay': '您好，目前正在等待顧客付款，' +
  '當顧客付款並填選完視訊時段後，Deeperience 會自動通知您，請耐心等候！',
  'order.deposit.finishPay': '顧客已經付完款囉，請即刻挑選有空的視訊時段，' +
  '並為他們做初步的安排，讓顧客感受到賓至如歸的待遇！',
  'order.video.comment': '以上為旅客有空的視訊時間，請選定您想要與旅客視訊討論旅程的時間。',
  'order.video.ableTime': '旅客空閒時間',
  'order.customize.title': '為旅客客製行程',
  'order.customize.create': '建立旅程',
  'order.customize.create.comment': '建立全新的旅程',
  'order.customize.choose': '選取旅程',
  'order.customize.choose.comment': '從先前建立的旅程進行修改',
  'order.recvBalance.waitPay': '您好，目前正在等待顧客付尾款，' +
  '當顧客付款完，Deeperience 會自動通知您，請耐心等候！',
  'order.recvBalance.finishPay': '顧客已經付完款囉！',

  'trip.createSite': '建立景點',
  'trip.createSite.name': '景點名稱',
  'trip.createSite.intro': '景點總覽',
  'trip.createSite.mainSite': '主要景點',
  'trip.createSite.subSite': '周邊景點',
  'trip.createSite.otherInfo': '其它資訊',
  'trip.createSite.done': '完成',
  'trip.createSite.form.name': '景點名稱',
  'trip.createSite.form.congratulation': '恭喜！您已建立完成您的專屬行程',
  'trip.createSite.form.finish': '完成',
  'trip.createSite.feeInfo': '景點價格資訊',
  'trip.createSite.remind': '景點小提醒',
  'trip.createSite.mainSite.intro': '主要景點介紹',
  'trip.createSite.mainSite.mainSite': '主要景點名稱',
  'trip.createSite.subSite.intro': '周邊景點介紹',
  'trip.createSite.subSite.subSite': '周邊景點名稱',
  'trip.createSite.subSite.add': '+ 新增周邊景點',
  'trip.createSite.otherInfo.fee': '價格資訊',
  'trip.createSite.otherInfo.recentActivity': '近期活動',
  'trip.createSite.otherInfo.recentActivity.date': '日期和時間',
  'trip.createSite.otherInfo.recentActivity.content': '內容',
  'trip.createSite.otherInfo.recentActivity.add': '+ 新增近期活動',
  'trip.createSite.done.comment': '恭喜！您已建立完成您的專屬行程',
  'trip.createSite.done.manage': '管理景點',

  'login.email': '信箱',
  'login.password': '密碼',
  'login.rememberMe': '記住我',
  'login.ensurePassword': '確認密碼',
  'login.facebook': '使用Facebook帳號登入',
  'login.title': '完美客製化旅程，旅程規劃零負擔',

  'register.mailHasSent': '確認信已送出！',
  'register.facebook': '使用Facebook帳戶註冊',
  'register.pleaseReceive': '請至信箱收取會員確認信',
  'register.hasRead': '註冊會員表示您同意遵守服務條款',
  'register.memberShip': '服務條款',
  'register.register': '註冊',

  'user.name': '暱稱',

  'memberCenter.personalPage': '個人頁面',
  'memberCenter.personalData': '個人資料',
  'memberCenter.edit': '編輯',
  'memberCenter.piece': '份',
  'memberCenter.buyTrip': '已購買旅程',
  'memberCenter.addTrip': '已新增旅程',
  'memberCenter.addSite': '已新增景點',
  'memberCenter.avatar': '大頭貼',
  'memberCenter.editPassword': '修改密碼',
  'memberCenter.oldPassword': '舊密碼',
  'memberCenter.newPassword': '新密碼',
  'memberCenter.ensurePassword': '確認密碼',
  'memberCenter.look': '查看',
  'memberCenter.editPersonalProfile': '編輯個人頁面',

  'company.name': 'DEEPERIENCE',
  'company.slogan': '完美客製化旅程，旅程規劃零負擔',
  'produce.trip': '製作專屬行程',
  'product.feature.headline': '產品特色',

  'features.trip.planning.slogan': '零負擔的規劃',
  'features.trip.planning.introduction': '為您媒合導遊、旅行部落客、沙發衝浪客、熱愛分享的在地人為您打造行程',
  'features.video.planning.slogan': '1對1的視訊、語音專人服務',
  'features.video.planning.introduction': '透過視訊，分享經驗',
  'features.trip.customized.slogan': '高度客製化',
  'features.trip.customized.introduction': '完全依照您的需求所設計的行程',

  'userReviews.headline': '精彩案例',

  'footer.aboutUs': '關於我們',
  'footer.fansite': '粉絲頁',
  'footer.joinUs': '加入我們',
  'footer.travelerServiceRule': '旅客服務條款',
  'footer.privateRule': '隱私權政策',
  'footer.planerServiceRule': '規劃者服務條款',
  'footer.serviceEmail': '客服電郵: ',
  'footer.companyEmail': 'service@deeperience.com',
  'footer.servicePhone': '客服熱線: ',
  'footer.phone': '000000000',
  'footer.serviceTime': '客服服務時間',
  'footer.time': '上午10點至下午6點',
  'footer.companyFullName': '醉好玩股份有限公司',
  'footer.tourismBureauNumber': '交觀甲xxx號',
  'footer.companyAddress': '新竹市中華路2段48號3樓',
  'footer.establishedPeriod': '2015-2016 Deeperience Inc.',

  presentTrip: '提供旅程',
  'presentTrip.slogan': '身為導遊的你，透過Deeperience，立即創立您精美的旅程，賺取費用！',
  'presentTrip.addSite': '建立景點',
  'presentTrip.addSite.explain': '在規劃您的旅程前，請先建立屬於你的景點清單',
  'presentTrip.addTrip': '建立旅程',
  'presentTrip.addTrip.explain': '利用景點清單建立您的精美旅程',
  'presentTrip.manageTrip': '管理旅程',
  'presentTrip.manageTrip.explain': '輕鬆管理所有您建立的旅程和交易',

  'common.previousStep': '上一步',
  'common.nextStep': '下一步',
  'common.amountAll': '共',
  'common.dollar': '元',
  'common.confirm': '確認',
  'common.cancel': '取消',
  'common.hour': '時',
  'common.minute': '分',
  'common.second': '秒',

  ...flattenMessages(HotelTypes, 'HotelTypes'),
  ...flattenMessages(TripElements, 'TripElements'),
  ...flattenMessages(SiteElements, 'SiteElements'),
  ...flattenMessages(FoodElements, 'FoodElements'),
  ...flattenMessages(TravelWays, 'TravelWays'),
  ...flattenMessages(TripDayInfos, 'TripDayInfos'),
  ...flattenMessages(TripLocations, 'TripLocations'),
  ...flattenMessages(Languages, 'Languages'),
  ...flattenMessages(Levels, 'Levels'),
  ...flattenMessages(CustomPhases, 'CustomPhases'),
}


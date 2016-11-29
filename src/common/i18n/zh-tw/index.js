import HotelTypes from './HotelTypes'
import TripElements from './TripElements'
import FoodElements from './FoodElements'
import TravelWays from './TravelWays'
import TripLocations from './TripLocations'
import TripDayInfos from './TripDayInfos'
import { Languages, Levels } from './Languages'
import flattenMessages from '../utils/flattenMessages'
import SiteElements from './SiteElements'

export default {
  parentLocale: 'zh',
  'nav.home': '首頁',
  'nav.todo': '待辦',
  'nav.language': '語言',
  'nav.feature': '產品特色',
  'nav.wonderful': '精采案例',
  'nav.customize': '客製行程',
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
  'page.first': '第一頁',
  'page.prev': '上一頁',
  'page.next': '下一頁',
  'page.last': '最後一頁',
  'trip.createTrip': '建立旅程',
  'trip.createTrip.title1': '旅程簡介',
  'trip.createTrip.title2': '景點規劃',
  'trip.createTrip.title3': '封面圖片',
  'trip.createTrip.title4': '預覽',
  'trip.createTrip.title5': '完成',
  'trip.createTrip.help': '貼心小建議',
  'trip.createTrip.mySite': '我的景點',
  'trip.createTrip.form.name': '旅程名稱',
  'trip.createTrip.form.price': '服務費',
  'trip.createTrip.form.dayInfo': '天數',
  'trip.createTrip.form.previousStep': '上一步',
  'trip.createTrip.form.nextStep': '下一步',
  'trip.createSite.title1': '景點名稱',
  'trip.createSite.title2': '景點簡介',
  'trip.createSite.title3': '景點資訊',
  'trip.createSite.title4': '周邊景點',
  'trip.createSite.title5': '完成',
  'trip.createSite.form.name': '景點名稱',
  'trip.createSite.form.previousStep': '上一步',
  'trip.createSite.form.nextStep': '下一步',
  'trip.createSite.form.congratulation': '恭喜！您已建立完成您的專屬行程',
  'trip.createSite.form.finish': '完成',
  'login.email': '信箱',
  'login.password': '密碼',
  'login.rememberMe': '記住我',
  'login.ensurePassword': '確認密碼',
  'login.title': '完美客製化旅程，旅程規劃零負擔',
  'register.mailHasSent': '確認信已送出！',
  'register.pleaseReceive': '請至信箱收取會員確認信',
  'register.sure': '確認',
  'register.hasRead': '已詳細閱讀',
  'register.memberShip': '會員條款',
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
  presentTrip: '提供旅程',
  'presentTrip.slogan': '身為導遊的你，透過Deeperience，立即創立您精美的旅程，賺取費用！',
  'presentTrip.addSite': '建立景點',
  'presentTrip.addSite.explain': '在規劃您的旅程前，請先建立屬於你的景點清單',
  'presentTrip.addTrip': '建立旅程',
  'presentTrip.addTrip.explain': '利用景點清單建立您的精美旅程',
  'presentTrip.manageTrip': '管理旅程',
  'presentTrip.manageTrip.explain': '輕鬆管理所有您建立的旅程和交易',
  ...flattenMessages(HotelTypes, 'HotelTypes'),
  ...flattenMessages(TripElements, 'TripElements'),
  ...flattenMessages(SiteElements, 'SiteElements'),
  ...flattenMessages(FoodElements, 'FoodElements'),
  ...flattenMessages(TravelWays, 'TravelWays'),
  ...flattenMessages(TripDayInfos, 'TripDayInfos'),
  ...flattenMessages(TripLocations, 'TripLocations'),
  ...flattenMessages(Languages, 'Languages'),
  ...flattenMessages(Levels, 'Levels'),
}


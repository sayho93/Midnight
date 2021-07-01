class Configs {
    API_UPLOAD_FILE_NOBASE = 'route.php?F=Routable.uploadFile.raw'
    APP_ID = 23

    BASE_URL = 'http://193.122.100.94/midnight/shared/public/'
    BASE_IMG_URL = 'http://193.122.100.94'
    BASE_IMG_POSTFIX = '/uploadFiles/'
    BASE_CHAT = 'http://193.122.100.94:3000/chatRoom'
    BASE_CHAT2 = 'http://172.30.1.50:3000/chatRoom'

    MAX_LOAD_ONCE = 5000

    API_GET_USER = this.BASE_URL + 'route.php?F=UserAuthRoute.getUser.raw'
    API_RANDOM_USER = this.BASE_URL + 'route.php?F=UserAuthRoute.getRandomUser.raw'

    API_INTRO = this.BASE_URL + 'route.php?F=UserAuthRoute.intro.raw'
    API_RENEW_USER = this.BASE_URL + 'route.php?F=UserAuthRoute.renewUser.raw'
    API_GET_BOARD = this.BASE_URL + 'route.php?F=BoardRoute.getBoard.raw&id='
    API_GET_BOARD_EX = this.BASE_URL + 'route.php?F=BoardRoute.getBoardExtra.raw&id='
    API_GET_BOARDLIST = this.BASE_URL + 'route.php?F=BoardRoute.getBoardList.raw'
    API_GET_BOARDLIST_EX = this.BASE_URL + 'route.php?F=BoardRoute.getBoardExtraList.raw'
    API_GET_BOARDLIST_EXF = this.BASE_URL + 'route.php?F=BoardRoute.getBoardExtraListForFeed.raw'
    API_GET_FIRST_NOTICE = this.BASE_URL + 'route.php?F=BoardRoute.getFirstNotice.raw'
    API_GET_CHECK_NICK = this.BASE_URL + 'route.php?F=UserAuthRoute.checkNick.raw'
    API_UPDATE_TOKEN = this.BASE_URL + 'route.php?F=UserAuthRoute.updateToken.raw'
    API_UPDATE_LOCATION = this.BASE_URL + 'route.php?F=UserAuthRoute.updateLatLng.raw'
    API_GET_USER_DISTANCE = this.BASE_URL + 'route.php?F=UserAuthRoute.getUserWithDistance.raw'
    API_GET_MARKETLIST = this.BASE_URL + 'route.php?F=BoardRoute.getMarketList.raw'

    API_POST_FILE = this.BASE_URL + 'route.php?F=BoardRoute.uploadFile.raw'

    // API_GET_CHARLIST = this.BASE_URL + 'route.php?F=WebRoute.getCharacterList.raw'
    API_GET_CHARLIST = this.BASE_URL + 'route.php?F=WebRoute.getCharacters.raw'
    API_GET_JOIN1 = this.BASE_URL + 'route.php?F=UserAuthRoute.joinUser.raw'
    API_GET_JOIN2 = this.BASE_URL + 'route.php?F=UserAuthRoute.setUserDetails.raw'
    API_GET_JOIN3 = this.BASE_URL + 'route.php?F=UserAuthRoute.setUserCharacter.raw'
    API_GET_REVERT = this.BASE_URL + 'route.php?F=UserAuthRoute.revertJoin.raw'
    API_POST_LOGIN = this.BASE_URL + 'route.php?F=UserAuthRoute.requestLogin.raw'
    API_GET_RECOM = this.BASE_URL + 'route.php?F=WebRoute.getRecomUser.raw'

    API_GET_USER_BY_LIKES = this.BASE_URL + 'route.php?F=UserAuthRoute.getUserOrderLikes.raw'
    API_GET_USER_BY_FOLLOWS = this.BASE_URL + 'route.php?F=UserAuthRoute.getUserOrderFollowers.raw'

    API_FOLLOW = this.BASE_URL + 'route.php?F=UserAuthRoute.follow.raw'
    API_UNFOLLOW = this.BASE_URL + 'route.php?F=UserAuthRoute.unfollow.raw'

    API_LIKE_BOARD = this.BASE_URL + 'route.php?F=BoardRoute.likeBoard.raw'
    API_UNLIKE_BOARD = this.BASE_URL + 'route.php?F=BoardRoute.unlikeBoard.raw'

    API_POST_BOARD = this.BASE_URL + 'route.php?F=BoardRoute.uploadBoard.raw'

    API_GET_IDENTITY = this.BASE_URL + 'route.php?F=UserAuthRoute.getIdentities.raw'
    API_GET_PROVINCE = this.BASE_URL + 'route.php?F=WebRoute.getProvince.raw'

    API_MATCH_REQ = this.BASE_URL + 'route.php?F=WebRoute.requestMatch.raw'
    API_MATCH_UPT = this.BASE_URL + 'route.php?F=WebRoute.updateMatchStat.raw'
    API_MATCH_CHK = this.BASE_URL + 'route.php?F=WebRoute.checkMatchStat.raw'
    API_MATCH_STAT = this.BASE_URL + 'route.php?F=WebRoute.myMatchStat.raw'
    API_MATCH_COUNT = this.BASE_URL + 'route.php?F=WebRoute.matchCount.raw'

    API_CHAT_LIST = this.BASE_URL + 'route.php?F=WebRoute.getChatRoom.raw'
    API_CHAT_INIT = this.BASE_URL + 'route.php?F=WebRoute.chatMessageList.raw'

    API_SET_LOC = this.BASE_URL + 'route.php?F=UserAuthRoute.setLocation.raw'
    API_SET_PUSH = this.BASE_URL + 'route.php?F=UserAuthRoute.setPush.raw'
    API_SET_BIO = this.BASE_URL + 'route.php?F=UserAuthRoute.setBio.raw'
    API_SET_SIDO = this.BASE_URL + 'route.php?F=UserAuthRoute.setSido.raw'
    API_SET_PROID = this.BASE_URL + 'route.php?F=UserAuthRoute.setProfileId.raw'
    API_SET_BGID = this.BASE_URL + 'route.php?F=UserAuthRoute.setBgId.raw'
    API_SET_PHONE = this.BASE_URL + 'route.php?F=UserAuthRoute.setPhone.raw'
    API_SET_BIRTH = this.BASE_URL + 'route.php?F=UserAuthRoute.setBirth.raw'
    API_SET_IDENTITY = this.BASE_URL + 'route.php?F=UserAuthRoute.setIdentity.raw'
    API_SET_NICKNAME = this.BASE_URL + 'route.php?F=UserAuthRoute.setNickname.raw'

    API_DELETE_BOARD = this.BASE_URL + 'route.php?F=BoardRoute.deleteBoard.raw'

    URL_FIND_PASS = 'http://picklecode.co.kr/midnight/findPass.php'

    DOWNLOAD_DIR = '/HC'

    URL_PRIVACY = 'http://picklecode.co.kr/main/privacy.php'
    URL_TERM = 'http://picklecode.co.kr/main/privacy.php'

    lat = -1
    lng = -1
}

export default new Configs()

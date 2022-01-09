import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('history', {
      params: params
    })
  },
  post (history) {
    return Api().post('history', history)
  }
  // },
  // delete (bookmarkId) {
  //   return Api().delete(`bookmarks/${bookmarkId}`)
  // }
}

// IMPORTANT: SEQUELIZE ADD 'HISTORIES' BY DEFAULT IN THE DATABASE

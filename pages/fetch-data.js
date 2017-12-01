import React from 'react'
import 'isomorphic-fetch'

export default class extends React.Component {
  // static async getInitialProps () {
  //   const res = await fetch('https://api.comany.com/user/123')
  //   const data = await res.json()
  //   return { username: data.profile.username }
  // }
  static async getInitialProps ({ res }) {
    return res
    ? { userAgent: res.headers['user-agent'] }
    : { userAgent: navigator.userAgent }
  }
}

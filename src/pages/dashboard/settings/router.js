import comp from './settings'
import billing from './billing/router'
import accdelete from './delete/router'
import profile from './profile/router'

export default {
  path: 'settings',
  redirect: 'settings/profile',
  component: comp,
  children: [
    billing,
    accdelete,
    profile
  ]
}
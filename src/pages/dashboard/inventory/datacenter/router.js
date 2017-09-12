'use strict'
import comp from './datacenter'
import list from './list/router'

export default {
  name: 'datacenter',
  path: 'datacenter',
  component: comp,
  children: [
    list
  ]
}

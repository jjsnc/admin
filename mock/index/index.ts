import { MockMethod } from 'vite-plugin-mock'
import { user } from '../user'
import { role } from '../role'
import { article } from '../article'
import { search } from '../search'

const mocks = [...user, ...role, ...article, ...search] as MockMethod[]

export default mocks

import axios from 'axios'

/* crud数据请求 */
export function getList(params) {
    return axios.get('https://www.easy-mock.com/mock/5a49f55bae362e6a29254bb2/crud/queryData')
}
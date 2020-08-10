import Axios from 'axios'
import url from './url'

const appkey = "zzyu_1564402433694";
const { baseURL, findByPage } = url;

// axios实例公共配置
const axios = Axios.create({
    baseURL,
    params: {
        appkey
    }
});

function find_by_page(page, size) {
    return axios.get(findByPage, {
        params: {
            page,
            size
        }
    })
}

export default {
    find_by_page
}


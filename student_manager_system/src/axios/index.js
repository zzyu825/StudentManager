import Axios from 'axios'
import url from './url'

const appkey = "zzyu_1564402433694";
const { baseURL, allStuUrl, findByPageUrl, searchStuUrl, updateStuUrl, addStuUrl, delStuUrl } = url;

// axios实例公共配置
const axios = Axios.create({
  baseURL,
  // params: {
  //     appkey
  // }
});

function allStu() {
  return axios.get(allStuUrl);
}

function findByPage(options) {
  return axios.get(findByPageUrl, {
    params: {
      ...options
    }
  })
}

function updateStu(options) {
  return axios.put(updateStuUrl, {
    data: {
      ...options
    }
  });
}

function searchStu(options) {
  return axios.get(searchStuUrl, {
    params: {
      ...options
    }
  });
}

function delStu(sNo) {
  return axios.delete(delStuUrl, {
    params: {
      sNo
    }
  });
}
function addStu(options) {
  return axios.post(addStuUrl, {
    data: {
      ...options
    }
  });
}

export default {
  allStu,
  findByPage,
  updateStu,
  searchStu,
  delStu,
  addStu
}


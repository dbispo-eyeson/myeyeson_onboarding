const API_URL = "https://evms.eyeson.biz/api" 
const TOKEN = localStorage.getItem('token') ? localStorage.getItem('token') : ''

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axiosApi.defaults.headers.common["Authorization"] = TOKEN

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)


const get = async (url, config = {})=>{
  return await axiosApi
  .get(url, { ...config })
  .then(response => response)
  .catch(e => e.response) 
}

const post = async (url, data, config = {}) => {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response)
    .catch(e => e.response) 
    
}

const put = async (url, data, config = {})=> {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .catch(e => e.response)  
}

const del = async (url, config = {}) => {
  return await axiosApi
    .delete(url, { ...config })
    .catch(e => e.response) 
}


//LOGIN
const POST_LOGIN = '/users/authenticate'
const POST_PASSWORD_FORGET = '/auth/forget-pwd'
const POST_LOGIN_SOCIAL = '/auth/social-login'

//STRUCTURES
const GET_TRANSACTIONS_TYPE = "/structures/types"

//DASHBOARD
const GET_KPI = "/reporters/kpi"
const GET_BUSINESS_SNAPSHOT = "/reporters/business-snapshot"
const GET_EMPLOYEE_PERFORMANCE = "/reporters/employee-performance"
const GET_BUSINESS_PERFORMANCE_ANALYSIS = "/reporters/business-performance-analysis"


//REPORTS
const GET_TRAFFIC = "/reporters/traffic"
const GET_CONVERSION_RATE = "/reporters/conversion-rate"
const GET_REVENUE_ANALYSIS = "/reporters/revenue-analysis"
const GET_KPI_DATA_MINING = "/reporters/kpi-data-mining"
const GET_HOURLY_TRAFFIC = "/reporters/hourly-traffic"
const GET_HOURLY_TRANSACTIONS = "/reporters/hourly-transactions"
const GET_HOURLY_REVENUES = "/reporters/hourly-revenues"
const GET_PLATE_AND_FACES = "/reporters/plate-and-faces"

//MY ALERTS
const GET_MY_ALERTS = ""
const UPDATE_MY_ALERTS = "update"
const ADD_MY_ALERTS = "add"

//MY INVESTIGATIONS
const GET_MY_INVESTIGATIONS = ""
const UPDATE_MY_INVESTIGATIONS = ""

//MY TASKS
const GET_MY_TASKS = ""
const UPDATE_MY_TASKS = ""

//TRANSACTIONS
const GET_TRANSACTIONS_FAVORITES = ""
const GET_TRANSACTIONS_POSITIVES = ""
const GET_TRANSACTIONS_NEGATIVE = ""
const GET_TRANSACTIONS_QUESTIONABLE = ""

//TOOLS
const ADD_NEW_INVESTIGATION = ""
const ADD_NEW_TASKS = ""
const ADD_NEW_PERSON_ENROLL = ""

//PROFILE
const GET_PROFILE = ""
const UPDATE_PROFILE = ""

//CONTACTS
const GET_USERS = "/users"




const postLogin = data => post(POST_LOGIN, data)
const getDashboardKPI = data => post(GET_KPI, data)
const getDashboardBusinessSnapshot = data => post(GET_BUSINESS_SNAPSHOT, data)
const getDashboardEmployeePerformance = data => post(GET_EMPLOYEE_PERFORMANCE, data)
const getDashboardBusinessPerformanceAnalysis = data => post(GET_BUSINESS_PERFORMANCE_ANALYSIS, data)
const getDashboardBusinessTraffic = data => post(GET_TRAFFIC, data)
const getTransactionsType = data => post(GET_TRANSACTIONS_TYPE, data)
const reset_password = data => post(RESET_PASSWORD, data)




const f_auth = async () => {

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const result = await postLogin({ "username": username, "password": password})

    if(result){

      console.log(result)

    }


}




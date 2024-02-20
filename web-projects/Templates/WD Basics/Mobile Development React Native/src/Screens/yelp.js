import axios from 'axios'
const ClientID='HvQ-OZAtL3CvZJQV7SE6EA'
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
         Authorization:'Bearer Qf4aE2hTqC2SSMCS2L5Dr4rSlVXXZZYnpLTRx9H0G9_DcFfLLF2K40PyVXJdwy_hg4hIOhDdKixLzEjdmS4S3BoGCHBCNTUVcfIoODvGG2rmuqOs5cEqp6h2XZ1oY3Yx'
    }
})


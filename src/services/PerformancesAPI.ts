/* PRE-DEFINED KEY VALUES */

const API_BASE_URL = 'https://api.line-up.tickets/api'; /* BASE API URL */
const PERFORMANCE = '21813'; /* PERFORMANCE ID */
const EVENT_ID = '151'; /* EVENT ID */
const API_TOKEN = process.env.REACT_APP_API_TOKEN; /* OUR API TOKEN STORED SAFELY */

/* API Call to get performances from API */

export const performancesAPI = () => fetch(`${API_BASE_URL}/performance/${PERFORMANCE}/?event_id=${EVENT_ID}`, {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}` 
  },
  mode:'cors'
}).then(function (response) {
  return response.json();
}).then(async (r) => {

  return r;
}).catch(function (data) {
  console.log({ data });
});
const API_ACCESS_TOKEN = '234ffdb8-0889-4be3-b096-97ab1679752c';

const API_GROUP_ID = '11fc220c-ebba-4e55-9346-cd1eed714620';
const API_INSITUTION_ID = 'fb6c8114-387e-4051-8cf7-4e388a77b673';

const API_FETCH_CHILDREN_URL = 'https://tryfamly.co/api/daycare/tablet/group';
const API_CHILD_CHECKIN_URL =
  (childId) => `https://tryfamly.co/api/v2/children/${childId}/checkins`;
const API_CHILD_CHECKOUT_URL =
  (childId) => `https://tryfamly.co/api/v2/children/${childId}/checkout`;


export {
  API_ACCESS_TOKEN,
  API_GROUP_ID,
  API_INSITUTION_ID,
  API_FETCH_CHILDREN_URL,
  API_CHILD_CHECKIN_URL,
  API_CHILD_CHECKOUT_URL,
};

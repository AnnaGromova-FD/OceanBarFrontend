import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
})

const KEY= 'dff137738364ea1d173be3de51fd7c58c1ccba70'

export const ApiDelivery = {
  getDelivery(query:string) {
    return instance.post('', {'query': `${query}`,
      'locations': [
        {'country': 'Беларусь', 'region': 'Минск'}
      ],
      'restrict_value': true
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Token ' + KEY
      },
    })
  }
}



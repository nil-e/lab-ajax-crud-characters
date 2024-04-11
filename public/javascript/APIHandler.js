class APIHandler {
  constructor (baseUrl) {
    //this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList () {
      return this.api.get('/characters');
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister (newChar) {
    return this.api.post('/characters',newChar);
  }

  updateOneRegister (id,updatedChar) {
    return this.api.put(`/characters/${id}`,updatedChar);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
}

import axios from '@/service/axios';

class Req {
  async get(url) {
    return await axios.get(`/${url}/`);
  }

  async post(url, data) {
    return await axios.post(`/${url}/`, data);
  }
}

class User extends Req {
  registery(data) {
    return this.post('profile', { ...data });
  }

  login(data) {
    return this.post('login', { ...data });
  }
}

class File extends Req {
  load(data) {
    return this.post('file_manager', { ...data });
  }
}

const user = new User();
const file = new File();

export {
  user,
  file,
}



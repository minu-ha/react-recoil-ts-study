import axios from 'axios';
import { IPost } from '../models/IPost'

const HOST = 'https://jsonplaceholder.typicode.com';

class PostApi {
    static endPoints = {
        GET: '/posts'
    }

    public static getPosts = async () => {
        try {
            const response = await axios.get<IPost[]>(`${HOST}${PostApi.endPoints.GET}`);
            return response.data
        } catch(e) {
            window.alert('API 호출 실패');
        }
    }
}

export default PostApi;
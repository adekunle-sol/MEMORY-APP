import bgPhotos from '../assets/vacation.jpg';
import { AiFillLike} from "react-icons/ai";
import { MdDelete} from "react-icons/md";
import { useEffect } from 'react';
import axios from 'axios';

const skeleton_array =[1,2,3,4]

const Post = () => {
    useEffect(() => {
        const fetch_data = () => {
            axios.get('http://localhost:5000/posts/get_data')
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        }

        fetch_data();
    },[]);
    return (
        <div className="posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
        }}>
            {skeleton_array.map(function (value) {
               return  <div key={value} className="post" style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.4)',
                borderRadius: '15px'
            }}>
                <div className="post_image"
                    style={{
                        backgroundImage: `url(${bgPhotos})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px'
                    }}
                >
                    <div className="creator">
                        <h4 style={{ marginBottom: '10px', color:"white" }}>Mark</h4>
                        <p style={{color:'white'}}>2 months ago</p>
                    </div>
                    <div className="edit">
                        <p style={{color:'white'}}>...</p>
                    </div>
                </div>
                <div className='desc' style={{ padding: '20px' }}>
                    <p>#china #australia</p>
                    <h3 style={{ marginTop: '15px' }}>Visisted the escape room</h3>
                    <p style={{ margin: '15px 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio repellat quia eveniet similique molestias obcaecati assumenda, architecto quasi commodi soluta.</p>
                    <div className='action' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button>like</button>
                        <button>delete</button>
                    </div>
                </div>
            </div>
            })}
        </div>
    )}

export default Post;
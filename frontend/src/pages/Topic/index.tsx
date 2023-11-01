import { Snackbar, Alert, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { getProfileByUsername } from "../../services";

function TopicPage() {

//Profile

const {user} = useAuth();
const params = useParams();
const [profile, setProfile] = useState({});

const [messageError, setMessageError] = useState('');
    
    useEffect(() =>{

        const username = params.username ? params.username : user?. username;

        if (username){
            getProfileByUsername(username)
            .then(result => {
                setProfile(result.data);
            })
            .catch(error => {
                setMessageError(String(error.message))
            })
        }
    
    }, [])
    
    const topics = [
        {
            owner: { fullname: 'Pedro 1' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum facilis obcaecati voluptatibus quia aspernatur qui modi ducimus ipsum! Officiis ad mollitia saepe commodi distinctio nostrum autem, eos esse libero?',
            coments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        }, {
            owner: { fullname: 'Pedro 2' },
            content: '',
            coments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        }, {
            owner: { fullname: 'Pedro 3' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum facilis obcaecati voluptatibus quia aspernatur qui modi ducimus ipsum! Officiis ad mollitia saepe commodi distinctio nostrum autem, eos esse libero?',
            coments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        }, {
            owner: { fullname: 'Pedro 4' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum facilis obcaecati voluptatibus quia aspernatur qui modi ducimus ipsum! Officiis ad mollitia saepe commodi distinctio nostrum autem, eos esse libero?',
            coments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        }, {
            owner: { fullname: 'Pedro 5' },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum facilis obcaecati voluptatibus quia aspernatur qui modi ducimus ipsum! Officiis ad mollitia saepe commodi distinctio nostrum autem, eos esse libero?',
            coments: 1,
            reposts: 1,
            likes: 30,
            createdAt: '2023-08-01 19:23:00'
        }
    ]



    return (
        <Snackbar
        open={Boolean(messageError)}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>

        <Alert severity="error"
            variant="filled"
            onClose={() => setMessageError('')}>
            {messageError}
        </Alert>
    </Snackbar>
    )

}

export default TopicPage;
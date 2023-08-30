import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";
import { useEffect, useState } from "react";

function TopicPage() {


    const [profile, setProfile] = useState({});
    
    useEffect(() =>{

        fetch('http://localhost:3000/profile')
        .then(res => res.json)
        .then(data =>{
            setProfile(data);
        })

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
        <Box id="topic-page" display="flex" flexDirection="column"
            alignItems="center" gap={3}>
            <HeaderProfile user={profile} />

            <TopicList items={topics} />

        </Box>
    )

}

export default TopicPage;
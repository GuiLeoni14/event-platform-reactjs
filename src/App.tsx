import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo';
import Event from './pages/Event';

const GET_LESSONS_QUERY = gql`
    query {
        lessons {
            id
            slug
            title
            teacher {
                bio
                name
                avatarURL
            }
        }
    }
`;
function App() {
    const { data } = useQuery(GET_LESSONS_QUERY);
    console.log(data);
    return <Event />;
}

export default App;

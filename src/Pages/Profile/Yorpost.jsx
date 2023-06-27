import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Yourpostcard from './Yourpostcard';

const Yorpost = () => {

    const { users } = useContext(AuthContext)

    const { refetch, data: postget = [] } = useQuery({
        queryKey: ['postget '],
        queryFn: async () => {
            const response = await fetch(`https://atg-task-2-server.vercel.app/postget?users=${users}`)
            return response.json()

        },

    })

    
    return (
        <div className=' grid grid-cols-2 w-8/12 mx-auto gap-36 my-24'>
            {
                postget.map(postget =>
                    <Yourpostcard
                    postget={postget}
                    refetch={refetch}
                    >

                    </Yourpostcard>
                )
            }

        </div>
    );
};

export default Yorpost;
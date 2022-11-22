import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'

export default function FavoriteMovie({close, model}) {

    const {data, setData, put, reset, errors} = useForm({ id: model.id, name: model.name,});

   const onSubmit = (e) => {
        e.preventDefault();
        put(route('addfavorite'), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    useEffect(() => {
        setData({...data,
            id: model.id, name: model.name
        });
    }, [model]);

    return (
        <>
            <form method="post" onSubmit={onSubmit} class="flex">
                <input type="hidden" name="id" value={data.id}/>
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Add</button>
            </form>
        </>

    )
}

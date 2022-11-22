import { useForm } from '@inertiajs/inertia-react'
import { Modal } from 'bootstrap';
import React, { useEffect } from 'react'

export default function EditMovie({close, model}) {

    const {data, setData, put, reset, errors} = useForm({ name: model.name, time: model.time, date: model.date, tag: model.tag, comment: model.comment, });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('movies.update', model.id), {
            data, 
            onSuccess: () => {
                reset(),
                close()
            }, 
        });
    }

    useEffect(() => {
        setData({...data,
            name: model.name, time: model.time, date: model.date, tag: model.tag, comment: model.comment,
        });
    }, [model]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="name" className="col-form-label">Name:</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                            {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="time" className="col-form-label">Time:</label>
                            <input type="text" className="form-control" name='time' value={data.time} onChange={onChange} id="time"/>
                            {errors && <div className='text-danger mt-1'>{errors.time}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" className="col-form-label">Date:</label>
                            <input type="date" className="form-control" name='date' value={data.date} onChange={onChange} id="date"/>
                            {errors && <div className='text-danger mt-1'>{errors.date}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="tag" className="col-form-label">Tag:</label>
                            <input type="text" className="form-control" name='tag' value={`${data.tag || ''}`} onChange={onChange} id="tag"/>
                            {errors && <div className='text-danger mt-1'>{errors.tag}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment" className="col-form-label">Comment:</label>
                            <textarea rows="5" cols="33" type="text" className="form-control" name='comment' value={`${data.comment || ''}`} onChange={onChange} id="comment"/>
                            {errors && <div className='text-danger mt-1'>{errors.comment}</div>}
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn bg-gradient-primary">Update</button>
                </div>
            </form>
        </>

    )
}

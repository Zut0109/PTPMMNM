import React from 'react'

export default function FormMovie({errors, submit, data, setData}) {
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    return (
        <>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={onChange} id="name"/>
                    {errors && <div className='text-danger mt-1'>{errors.name}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="comment" className="col-form-label">Comment:</label>
                    <textarea rows="5" cols="33" className="form-control" name='comment' value={`${data.comment || ''}`} onChange={onChange} id="comment"/>
                    {errors && <div className='text-danger mt-1'>{errors.comment}</div>}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn bg-gradient-primary">{submit}</button>
            </div>
        </>
    )
}

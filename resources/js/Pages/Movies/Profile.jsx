import { useForm, usePage } from '@inertiajs/inertia-react';
import Base from '../../Layouts/Base'
import React, { useState } from "react";

export default function Profile(props) {

    const [selectedImage, setSelectedImage] = useState(null);

    const [selectedVideo, setSelectedVideo] = useState(null);


    const {data: movie, links, meta} = props.movie; 

    const {data, setData, put, reset, errors} = useForm({ name: movie.name, time: movie.time, date: movie.date, tag: movie.tag, type: movie.type, comment:movie.comment });

    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        put(route('movies.update', movie.id), {
            data, 
            onSuccess: () => {
               
            }, 
        });
    }

    return (
        <>
            <div>
                <div className="card shadow-lg mx-4 my-3">
                    <div className="card-body p-3">
                    <div className="row gx-4">
                        <div className="col-auto">
                        <div className="avatar avatar-xl position-relative">
                            <img src={'/storage/movies/' + movie.id +'.jpg'} alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                        </div>
                        </div>
                        <div className="col-auto my-auto">
                        <div className="h-100">
                            <h5 className="mb-1">
                            {data.name}
                            </h5>
                            {/* <p className="mb-0 font-weight-bold text-sm">
                            Public Relations
                            </p> */}
                        </div>
                        <form action={ route('uploadmovieimage') } method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="id" value={movie.id} />
                            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                            <div className="col-md-6 ">
                                        <div className='form-group'>
                                            <label htmlFor="avatar" className="form-control-label">Change Thumnail</label>
                                                {selectedImage && (
                                                    <div>
                                                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                                    <br />
                                                    <button className="btn btn-primary mt-3"onClick={()=>setSelectedImage(null)}>Remove</button>
                                                    </div>
                                                )}
                                                    <br>
                                                    </br>
                                                    <input
                                                        className='btn btn-primary'
                                                        type="file"
                                                        name="image"
                                                        onChange={(event) => {
                                                        console.log(event.target.files[0]);
                                                        setSelectedImage(event.target.files[0]);
                                                        }}
                                                    />
                                                </div>
                                        <div className="d-flex align-items-center">
                                            <input type='submit' className="btn btn-primary btn-sm ms-auto" value="Upload"/>
                                        </div>
                                    </div>
                        </form>
                        </div>
                        <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                        <form action={ route('uploadvideo') } method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="id" value={movie.id} />
                            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                            <div className="col-md-6 ">
                                        <div className='form-group'>
                                            <label htmlFor="video" className="form-control-label">Upload Video</label>
                                                    <input
                                                        className='btn btn-primary'
                                                        type="file"
                                                        name="video"
                                                    />
                                                </div>
                                        <div className="d-flex align-items-center">
                                            <button type='submit' className="btn btn-primary btn-sm ms-auto">Upload</button>
                                        </div>
                                    </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid py-4">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <form enctype="multipart/form-data" onSubmit={onSubmit}>
                                <div className="card-header pb-0">
                                    <div className="d-flex align-items-center">
                                    <p className="mb-0">Edit Movie</p>
                                    <button type='submit' className="btn btn-primary btn-sm ms-auto">Save</button>
                                    </div>
                                </div>
                                
                                <div className="card-body">                                
                                    <p className="text-uppercase text-sm">Movie Information</p>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="name" className="form-control-label">Name</label>
                                            <input className="form-control" type="text" name='name' value={data.name} onChange={onChange} id="name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label htmlFor="time" className="form-control-label">Time</label>
                                            <input className="form-control" type="text" name='time' value={data.time} onChange={onChange} id="time" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="date" className="form-control-label">Date</label>
                                            <input className="form-control" type="date" name='date' value={data.date} onChange={onChange} id="date" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="tag" className="form-control-label">Tag</label>
                                            <input className="form-control" type="text" name='tag' value={data.tag} onChange={onChange} id="tag" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="type" className="form-control-label">Type</label>
                                            <input className="form-control" type="text" name='type' value={data.type} onChange={onChange} id="type" />
                                            </div>
                                        </div>
                                        </div>
                                        <hr className="horizontal dark" />
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                            <label htmlFor="description" className="form-control-label">Description</label>
                                            <textarea className="form-control" type="text" name='description' value={data.comment} onChange={onChange} id="address" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-profile pb-7">
                            <img src="/img/bg-profile.jpg" alt="Image placeholder" className="card-img-top" />
                            <div className="row justify-content-center">
                                <div className="col-4 col-lg-4 order-lg-2">
                                <div className="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                                    <a href="javascript:;">
                                    <img src={'/storage/movies/' + movie.id} className="rounded-circle img-fluid border border-2 border-white" />
                                    </a>
                                </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

Profile.layout = (page) => <Base children={page} title={"Profile"}/>


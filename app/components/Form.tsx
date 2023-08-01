import {Form, useNavigation} from "@remix-run/react";


export default function () {

    return (
        <div>
            <Form method="post" className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2'>
                <input name="title" placeholder='Todo Title ' className='input input-bordered input-primary w-80'
                       required/>
                <input name="content" placeholder='Todo Text' className='input input-bordered input-primary w-80'
                       required/>
                <button
                    type="submit"
                    className='btn btn-primary w-28'
                    name="_action"
                    value='create'
                >
                    Add
                </button>
            </Form>
        </div>)
}
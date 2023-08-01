import {Form, Link, useNavigation} from "@remix-run/react";
import {useState} from "react";

const EditForm: React.FC<{ title: string, content: string }> = (todo) => {

    const busy=useNavigation().formData

    return (
        <>
            <Form method="put" className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2'>
                <input name="title" defaultValue={todo.title} placeholder='Todo Title' className='input input-bordered input-primary w-80' required />
                <input name="content" defaultValue={todo.content} placeholder='Todo Text' className='input input-bordered input-primary w-80' required />
                <Link
                    to={'/'}
                    className='btn btn-secondary'>
                    Back
                </Link>
                <button
                    className={busy ? 'btn btn-warning' : 'btn btn-primary'}
                    type="submit"
                    name="_action"
                    value='delete'
                    disabled={!!busy}
                >
                    {busy ? 'Saving' : 'Save'}
                </button>

            </Form>
        </>
    )
}
export default EditForm;

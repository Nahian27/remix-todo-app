import { Form, Link } from "@remix-run/react";

const EditForm: React.FC<{ title: string, content: string }> = (todo) => {

    console.log(todo)

    return (
        <>
            <Form method="PUT" className='flex flex-col md:flex-row justify-center items-center md:my-10 gap-5 m-2'>
                <input name="title" defaultValue={todo.title} placeholder='Todo Title' className='input input-bordered input-primary w-80' required />
                <input name="content" defaultValue={todo.content} placeholder='Todo Text' className='input input-bordered input-primary w-80' required />
                <Link
                    to={'/'}
                    prefetch="viewport"
                    className='btn btn-secondary'>
                    Back
                </Link>
                <button
                    type='submit'
                    className='btn btn-primary'
                >
                    Save Changes
                </button>

            </Form>
        </>
    )
}
export default EditForm;

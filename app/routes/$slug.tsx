import { supabase } from '~/lib/initSupabase'
import { ActionArgs, LoaderArgs, V2_MetaFunction, json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import EditForm from '~/components/EditForm';
export const meta: V2_MetaFunction = () => {
    return [
        { title: "Edit Todo" },
    ];
};

export async function loader({ params }: LoaderArgs) {
    const { data } = await supabase
        .from('Todos')
        .select('*')
        .eq('id', params.slug)
    return data
}
export async function action({ request, params }: ActionArgs) {
    const formData = await request.formData();
    const { title, content } = Object.fromEntries(formData)
    await supabase.from('Todos').update({ title: title, content: content })
        .eq('id', params.slug)
    return redirect('/')
}



export default function () {

    const todo = useLoaderData()

    return (
        <>
            <h1 className='sm:text-5xl text-4xl py-10 text-center'>Edit Todo No.{todo[0].id}</h1>
            <EditForm key={todo[0].id} title={todo[0].title} content={todo[0].content} />
        </>)
}
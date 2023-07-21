import { supabase } from '~/lib/initSupabase'
import EditForm from "~/components/EditForm";
import { ActionArgs, LoaderArgs, V2_MetaFunction, json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
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
    return JSON.stringify(data)
}
export async function action({ request, params }: ActionArgs) {
    const formData = await request.formData();
    await supabase
        .from('Todos')
        .update({ title: formData.get("title"), content: formData.get("content") })
        .eq('id', params.slug)
    return redirect('/')
}

export default function () {

    const todo: { id: number, title: string, content: string } = useLoaderData()

    return (
        <>
            <h1 className='sm:text-5xl text-4xl py-10 text-center'>Edit Todo No.{todo.id}</h1>
            <EditForm title={todo.title} content={todo.content} />
        </>)
}
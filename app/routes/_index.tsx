import { redirect, type ActionArgs, type V2_MetaFunction, json } from "@remix-run/node";
import { supabase } from '~/lib/initSupabase'
import Form from "~/components/Form";
import Todo from "~/components/Todo";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Remix Todo App" },
	];
};

export async function loader() {
	const { data } = await supabase.from('Todos').select('*')
	return data
}
export async function action({ request }: ActionArgs) {
	const formData = await request.formData();
	const todo = {
		title: formData.get("title"),
		content: formData.get("content")
	}
	await supabase.from('Todos').insert(todo)
	return null
}
export default function Index() {

	const data = useLoaderData()
	return (
		<>
			<h1 className='sm:text-5xl text-3xl py-10 text-center'>Welcome To My Todo App</h1>
			{/* <h1 className='sm:text-2xl text-3xl py-10 text-center'>Dark Mode: {cookieStore?.value}</h1> */}
			<Form />
			<div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 mt-5'>
				{
					data.map((todo: { id: number, title: string, content: string }, i: number) => {
						const { id, title, content } = todo;
						return <Todo key={id} slug={id} i={i} title={title} text={content} />
					})
				}
			</div>
		</>
	)
}

import {motion} from "framer-motion"
import {Link, useFetcher} from "@remix-run/react";


export default function Todo(p: { slug: number, i: number, title: string, text: string }) {
    const fetcher = useFetcher()
    const busy = fetcher.formData?.get('_action') === 'delete'
    const isJavascriptEnabled = typeof window !== 'undefined';

    return (<>

            <motion.div
                layout
                key={p.slug}
                initial={{opacity: isJavascriptEnabled ? 0 : 1, y: isJavascriptEnabled ? 100 : 0}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, scale: 0.75}}
                transition={{delay: p.i * 0.1, type: 'spring', duration: 1}}
                className='card shadow-lg bg-base-200 w-80 sm:h-96 h-60'>
                <div className="card-body">
                    <h2 className='card-title'>
                        {p.title}
                    </h2>
                    <div className='card-body'>
                        {p.text}
                    </div>
                    <div className='card-actions flex justify-end gap-3'>
                        <Link prefetch='viewport' to={p.slug.toString()} className='btn btn-secondary'>Edit</Link>
                        <fetcher.Form method="post">
                            <input type='hidden' name="id" value={p.slug}/>
                            <button
                                className={busy ? 'btn btn-warning' : 'btn btn-accent'}
                                type="submit"
                                name="_action"
                                value='delete'
                                disabled={busy}
                            >
                                {busy ? 'Deleting' : 'Delete'}
                            </button>
                        </fetcher.Form>

                    </div>
                </div>
            </motion.div>
        </>

    )
}
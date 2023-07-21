import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Form, Link } from "@remix-run/react";


export default function Todo(p: { slug: number, i: number, title: string, text: string }) {

    const [isLoading, setIsLoading] = useState(false);

    return (<>
        <AnimatePresence mode="wait">
            <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ ease: "backOut", duration: 0.5, delay: p.i * 0.1, layout: { type: "spring", duration: 1 } }}
                className='card shadow-lg bg-base-200 w-80 sm:h-96 h-60'>
                <div className="card-body">
                    <h2 className='card-title'>
                        {p.title}
                    </h2>
                    <div className='card-body'>
                        {p.text}
                    </div>
                    <div className='card-actions flex justify-end gap-3'>
                        <Link prefetch="viewport" to={"todo/" + p.slug} className='btn btn-secondary'>Edit</Link>
                        <Form method="post">
                            <input type='hidden' name="id" value={p.slug} />
                            <button
                                className={isLoading ? 'btn btn-warning' : 'btn btn-accent'}
                                type="submit"
                                name="_action"
                                value='delete'
                                onClick={() => setIsLoading(true)}
                            >
                                {isLoading ? 'Deleting' : 'Delete'}
                            </button>
                        </Form>

                    </div>
                </div>
            </motion.div >
        </AnimatePresence >
    </>

    )
}
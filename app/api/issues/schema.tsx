import {z} from 'zod'

const schema=z.object({
    title: z.string().min(5,"invalid issue title (length)"),
    description:z.string().min(10,"invalid description length")

})
export default schema
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'

const coffee_store = () => {
    const router = useRouter()
    console.log(router);
    return (
        <div>
            coffee_store{router.query.id}
            <Link href='/'>Back to home</Link>
        </div>
    )
}

export default coffee_store
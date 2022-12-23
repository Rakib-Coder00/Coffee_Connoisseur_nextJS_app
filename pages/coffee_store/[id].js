import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import coffeeStoreData from '../../data/coffee-stores.json'

export function getStaticProps({ params }) {
    // const params = staticProps.params 
    console.log(params);
    return {
        props: {
            coffeeStore: coffeeStoreData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id //dynamic id
            })
        }
    }
}

1
export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } },
        ],
        fallback: true
    }
}



const coffeeStore = (props) => {
    // const router = useRouter()
    const router = useRouter()
    console.log(router)
    console.log(props)

    if(router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <div>
            coffee_store{router.query.id}
            <Link href='/'>Back to home</Link>
            <p>{props.coffeeStore.name}</p>
            <p>{props.coffeeStore.address}</p>
        </div>
    )
}

export default coffeeStore
import { Amplify, API, withSSRContext } from "aws-amplify";
import Head from "next/head";
import { useRouter } from "next/router";
import awsExports from "../../src/aws-exports";
import { getPlaces, listPlaces } from "../../src/graphql/queries";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

Amplify.configure({ ...awsExports, ssr: true });

export async function getStaticPaths() {
    const SSR = withSSRContext();
    const { data } = await SSR.API.graphql({ query: listPlaces });
    const paths = data.listPlaces.items.map((place) => ({
        params: { id: place.id },
    }));

    return {
        fallback: true,
        paths,
    };
}

export async function getStaticProps({ params }) {
    const SSR = withSSRContext();
    const { data } = await SSR.API.graphql({
        query: getPlaces,
        variables: {
            id: params.id,
        },
    });

    return {
        props: {
            place: data.getPlaces,
        },
    };
}


export default function Places({ place }) {
    const router = useRouter();
   console.log(place)

    if (router.isFallback) {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Loading&hellip;</h1>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Places > {place.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Places > {place.name}</p>
            <main className={styles.main}>
                <h1 className={styles.title}>{place.name}</h1>
                <Image loader={() => place.photo} src={place.photo} width={500} height={300} />
                <p className={styles.description}>{place.description}</p>
            </main>

        </div>
    );
}

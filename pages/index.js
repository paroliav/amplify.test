import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../src/aws-exports";
import { listPlaces } from "../src/graphql/queries";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listPlaces });

  return {
    props: {
      places: response.data.listPlaces.items,
    },
  };
}


export default function Home({ places = [] }) {
  return (
      <div className={styles.container}>

          <div className={styles.banner} >
              <Image src="/earth.jpeg" width={1500} height={800}/>
              <p>Fuck Earth..</p>
          </div>
          <main className={styles.main}>

          <p className={styles.description}>
            We don't want to be sustainable coz we hate these beautiful places
          </p>

          <div className={styles.grid}>
            {places.map((place) => (
                <a className={styles.card} href={`/places/${place.id}`} key={place.id}>
                    <Image loader={() => place.photo} src={place.photo} width={500} height={300} />
                  <h3>{place.name}</h3>
                  <p>{place.location}, {place.country}</p>
                </a>
            ))}
          </div>
        </main>
      </div>
  );
}

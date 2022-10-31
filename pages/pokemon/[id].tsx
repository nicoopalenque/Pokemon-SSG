import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { pokeApi } from '../../api';

interface Props {
  pokemon: any;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout title='Algun Pokemon'>
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${index+1}`)
  
  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;
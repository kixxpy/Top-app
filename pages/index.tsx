
import { Button, Htag, Input, Rating, Tag, Textarea } from '@/components';
import { P } from '@/components/P/P';
import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home( { menu }: HomeProps ) {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Head>
        <title>MyTop - лучший топ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <>
        <Htag tag='h1'>Текс</Htag>
        <Button appearance='primary' arrow='down'>Кнопка</Button>
        <Button appearance='ghost' arrow='right'>Кнопка</Button>
        <P size='m'>Студенты освоят не только hard skills</P>
        <P size='l'>Студенты освоят не только hard skills</P>
        <P size='s'>Студенты освоят не только hard skills</P>
        <Tag color='red'>hh.ru</Tag>
        <Tag color='primary'>hh.ru</Tag>
        <Tag color='grey'>hh.ru</Tag>
        <Rating rating={rating} isEditable setRating={setRating}></Rating>
        <Input placeholder='Имя'/>
        <Textarea />
      </>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}
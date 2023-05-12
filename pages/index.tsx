
import { Button, Htag, Tag } from '@/components';
import { P } from '@/components/P/P';
import Head from 'next/head';

export default function Home() {
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
        <P size='m'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
        <P size='l'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
        <P size='s'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
        <Tag color='red'>hh.ru</Tag>
        <Tag color='primary'>hh.ru</Tag>
        <Tag color='grey'>hh.ru</Tag>
      </>
    </>
  );
}
import React, { useEffect, useState } from 'react';
import CardContent from '../../components/CardContent';
import api from '../../utils/api';
import './style.css'
import Header from '../../components/Header';
interface Article {
  title: string;
  description?: string;
  author?: string;
  url?: string;
}
function Home() {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const fetchData = async () => {
    try {
      const response = await api.get('/top-headlines', {
        params: {
          country: 'us',
        },
      });
      setNewsData(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {newsData.length > 0 ? (
        <div className='container'>
          {newsData.map((article, index) => (
            <CardContent title={article?.title} description={article?.description} author={article?.author} url={article?.url} />
          ))}
        </div>
      ) : (
        <p>Carregando notícias...</p>
      )}
    </>
  );
}

export default Home;

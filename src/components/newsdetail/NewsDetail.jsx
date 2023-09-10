import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    // Mengambil data berita berdasarkan ID dari API atau sumber data lainnya
    axios
      .get(`https://api-creator-server.vercel.app/news-data/${id}`)
      .then((res) => {
        setNewsData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, [id]);

  if (!newsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">{newsData.newsTitle}</h2>
      <img
        src={newsData.newsPreviewImage}
        alt="News Preview"
        className="mb-4"
      />
      <p>{newsData.newsDescription}</p>
      <a
        href="/"
        className="text-blue-500 underline mt-4 inline-block"
      >
       Back
      </a>
    </div>
  );
};

export default NewsDetail;

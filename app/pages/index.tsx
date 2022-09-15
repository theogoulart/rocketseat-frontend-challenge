import Head from 'next/head'
import Product from '../components/ProductCard'

export default function Home() {
  const data = [
    {
      "id": "1c19939f-9506-4fc3-b11e-269ad0b939fb",
      "price_in_cents": 3689,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg",
      "name": "Camiseta Outcast"
    },
    {
      "id": "3fdfecbc-281f-412d-95c9-f35127957c8f",
      "price_in_cents": 6802,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "name": "Caneca Never settle"
    },
    {
      "id": "f93954f4-e226-4b8f-8a93-9ef001939e2a",
      "price_in_cents": 6235,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "name": "Caneca de cerâmica rústica"
    },
    {
      "id": "4c48e342-726f-423c-b346-3cf3869710ca",
      "price_in_cents": 2039,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
      "name": "Camiseta Ramones"
    },
    {
      "id": "9eed490d-b8a9-446c-aaf9-d95c8f699c59",
      "price_in_cents": 5858,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg",
      "name": "Camiseta evening"
    },
    {
      "id": "ead0d77b-8c61-4f2d-8978-a9551983bb0f",
      "price_in_cents": 2791,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
      "name": "Caneca de cerâmica rústica"
    },
    {
      "id": "d54e8ca0-8573-4798-8652-c3c9def3257b",
      "price_in_cents": 8476,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg",
      "name": "Camiseta not today."
    },
    {
      "id": "4ceff697-ef19-401a-b23e-e26541d1aacc",
      "price_in_cents": 6267,
      "image_url": "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg",
      "name": "Caneca Never settle"
    }
  ];

  return (
    <div>
      <Head>
        <title>Caputeeno Store</title>
        <meta name="description" content="Compre camisas e acessórios!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data.map((item, i) => (<Product key={i} product={item} />))}
      </main>
      <footer>
      </footer>
    </div>
  )
}

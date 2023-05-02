

async function getData() {
  const res = await fetch('https://random-ideas-backend-tau.vercel.app/api/ideas');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data
}

export default async function Home() {
  const data = await getData();

  console.log(data)
  return (
    <main>
      {data.data.map((item)=>(
        <div key={item.id}>
          {item.text}
        </div>
      ))}
    </main>
  )
}

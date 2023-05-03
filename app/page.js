import AddIdea from "./components/AddIdea";
import IdeaCard from "./components/IdeaCard";
import Modal from "./components/Modal";


async function getData() {
  const res = await fetch(process.env.BASE_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data
}
let show = false;

const click = () => {
  show = !show;
  console.log(show)
}
export default async function Home() {
  const data = await getData();

  return (
    <main>
    <Modal/>
      <div className="container max-w-[1200px] px-3 py-7 mx-auto">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h4 className="text-2xl font-semibold">Share Your Random Ideas  &#128513;</h4>
          <AddIdea label={'Add Your Idea +'} />
        </div>
        <div className="flex gap-5 flex-wrap mt-10">
          {data.data.map((item) => (
            <IdeaCard key={item.id} text={item.text} date={item.date} username={item.username} tag={item.tag} />
          ))}
        </div>
      </div>
    </main>
  )
}

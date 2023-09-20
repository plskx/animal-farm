import { Animal } from './components/Animal'
import { useAnimalSearch } from './hooks/useAnimalSearch'

function App() {
  const { search, animals } = useAnimalSearch()

  return (
    <main className="flex items-center justify-center h-screen bg-slate-950">
      <div className="relative p-4 overflow-auto rounded-md shadow-lg bg-slate-900 w-[35rem] h-5/6">
        <h1 className="text-3xl font-bold text-white">Animal Farm</h1>
        <div className="mt-5">
          <input
            className="w-full p-2 text-black rounded-sm"
            type="text"
            placeholder="Search"
            value={localStorage.getItem('lastQuery') || ''}
            onChange={(e) => search(e.target.value)}
          />

          <ul className="p-5 list-disc">
            {animals.map((animal) => (
              <Animal key={animal.id} {...animal}></Animal>
            ))}
            {!animals.length && 'No Animal Found!'}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default App

import { ChangeEvent, useState } from "react";
import logo from "./assets/logo.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";

interface NoteProps {
  id: string;
  date: Date;
  content: string;
}

function App() {
  const [search, setSearch] = useState<string>("");
  const [notes, setNotes] = useState<NoteProps[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) return JSON.parse(notesOnStorage);

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function onNoteDelete(id: string) {
    const notesArray = notes.filter((note) => note.id !== id);

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;

    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="Expert Notes" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((item: any) => (
          <NoteCard note={item} onNoteDeleted={onNoteDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;

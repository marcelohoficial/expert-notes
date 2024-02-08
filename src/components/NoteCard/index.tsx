export function NoteCard() {
  return (
    <button
      className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-lime-500 outline-none
    "
    >
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est
        velit aperiam possimus ex numquam itaque sint laborum ut! Facilis soluta
        quaerat consequuntur pariatur ad aut minus eligendi esse nemo. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Adipisci est velit
        aperiam possimus ex numquam itaque sint laborum ut! Facilis soluta
        quaerat consequuntur pariatur ad aut minus eligendi esse nemo.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/5 pointer-events-none" />
    </button>
  );
}

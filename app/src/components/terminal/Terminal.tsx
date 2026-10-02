export function Terminal() {
  return (
    <div className="w-[50%] shadow-2xl shadow-black/50 bg-slate-900 border border-slate-800/60 rounded-lg flex flex-col text-zinc-100 font-mono">

      <div className="relative flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800/60 rounded-t-lg">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <span className="absolute left-1/2 -translate-x-1/2 text-sm text-slate-400">terminal — zsh</span>
      </div>

      <div className="flex-1 p-8 overflow-y-auto flex flex-col">
        <h1 className="text-lg font-bold">Leonardo Pettersen</h1>
        <h2 className="font-medium text-slate-300">Estudante de Engenharia de Software</h2>
        <h2 className="text-slate-400">PUC Minas</h2>
        
        <p className="text-slate-500 mt-6">
          digite <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">ajuda</span> para ver os comandos
        </p>

        <div className="flex flex-wrap gap-4 mt-3">
          <span className="border border-slate-700/50 px-3 py-1 rounded-md text-sm text-slate-400">[ about ]</span>
          <span className="border border-slate-700/50 px-3 py-1 rounded-md text-sm text-slate-400">[ projects ]</span>
          <span className="border border-slate-700/50 px-3 py-1 rounded-md text-sm text-slate-400">[ experience ]</span>
          <span className="border border-slate-700/50 px-3 py-1 rounded-md text-sm text-slate-400">[ contact ]</span>
          <span className="border border-slate-700/50 px-3 py-1 rounded-md text-sm text-slate-400">[ help ]</span>
        </div>

        <div className="mt-10 pt-6 flex items-center gap-2 border-t border-slate-800/60">
          <span className="text-blue-500">guest@os:~$</span>
          <div className="w-2 h-4 bg-blue-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
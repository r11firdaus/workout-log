import { Exercise } from "@/types";

// Kita mendefinisikan "Props" (data yang diterima komponen ini dari luar)
interface WorkoutCardProps {
  exercise: Exercise;
  onDelete: (id: number) => void; // Kita sekalian tambah fitur hapus!
}

export default function WorkoutCard({ exercise, onDelete }: WorkoutCardProps) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 flex justify-between items-center group">
      <div>
        <h2 className="text-xl font-semibold">{exercise.name}</h2>
        <p className="text-slate-400 mt-1 text-sm">
          Target: {exercise.sets} Sets x {exercise.reps} Reps
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="bg-slate-700 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium">
          {exercise.muscleGroup}
        </span>
        {/* Tombol hapus yang hanya muncul saat di-hover (berkat class 'group' di parent) */}
        <button 
          onClick={() => onDelete(exercise.id)}
          className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
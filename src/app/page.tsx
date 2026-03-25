"use client";

import { useState, useEffect } from "react";
import { Exercise } from "@/types";
import WorkoutCard from "@/components/workoutCard";


export default function Home() {
  const [workouts, setWorkouts] = useState<Exercise[]>([]);
  const [newWorkoutName, setNewWorkoutName] = useState("");
  const [newMuscleGroup, setNewMuscleGroup] = useState("Dada"); // Default pilihan otot

  // --- EFEK 1: Membaca data dari Local Storage SAAT APLIKASI PERTAMA DIBUKA ---
  useEffect(() => {
    const savedWorkouts = localStorage.getItem("workout-data");
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
    }
  }, []); // Array kosong [] artinya hanya dijalankan sekali saat komponen "mount"

  // --- EFEK 2: Menyimpan data ke Local Storage SETIAP KALI STATE 'workouts' BERUBAH ---
  useEffect(() => {
    // Kita berikan perlindungan agar tidak menimpa data kosong saat render pertama
    if (workouts.length > 0) {
      localStorage.setItem("workout-data", JSON.stringify(workouts));
    }
  }, [workouts]); // Akan otomatis jalan jika 'workouts' berubah

  const handleAddWorkout = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newWorkoutName) return;

    const newExercise: Exercise = {
      id: Date.now(),
      name: newWorkoutName,
      sets: 3,
      reps: 10,
      muscleGroup: newMuscleGroup,
    };

    setWorkouts([...workouts, newExercise]);
    setNewWorkoutName(""); 
  };

  const handleDeleteWorkout = (id: number) => {
    // Filter out id yang mau dihapus, lalu simpan ke state (dan otomatis memicu useEffect ke-2)
    const updatedWorkouts = workouts.filter(w => w.id !== id);
    setWorkouts(updatedWorkouts);
    
    // Jika data habis, kita harus manual hapus dari local storage
    if (updatedWorkouts.length === 0) {
      localStorage.removeItem("workout-data");
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-emerald-400">
          Jadwal Latihan Hari Ini
        </h1>

        <form onSubmit={handleAddWorkout} className="mb-8 flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={newWorkoutName}
              onChange={(e) => setNewWorkoutName(e.target.value)}
              placeholder="Contoh: Barbell Squat..."
              className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500"
            />
            {/* Dropdown sederhana untuk memilih grup otot */}
            <select 
              value={newMuscleGroup}
              onChange={(e) => setNewMuscleGroup(e.target.value)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-emerald-500"
            >
              <option value="Dada">Dada</option>
              <option value="Punggung">Punggung</option>
              <option value="Kaki">Kaki</option>
              <option value="Bahu">Bahu</option>
              <option value="Lengan">Lengan</option>
            </select>
          </div>
          
          <button 
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 w-full text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Tambah Latihan
          </button>
        </form>

        <div className="space-y-4">
          {workouts.map((exercise) => (
            // Kita panggil komponen yang baru kita buat! Jauh lebih rapi.
            <WorkoutCard 
              key={exercise.id} 
              exercise={exercise} 
              onDelete={handleDeleteWorkout} 
            />
          ))}

          {workouts.length === 0 && (
            <p className="text-center text-slate-500 italic">Belum ada rutinitas. Tambahkan di atas!</p>
          )}
        </div>
      </div>
    </main>
  );
}
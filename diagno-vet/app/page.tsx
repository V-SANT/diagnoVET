import DiagnosisEditor from "@/components/DiagnosisEditor";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-3xl px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Demo de Historia Clínica
        </h1>

        <DiagnosisEditor />

      </div>
    </div>
  );
}
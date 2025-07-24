// app/dashboard/page.tsx
import ResumeUploader from "@/components/Resume/ResumeUploader";
import ResumePreview from "@/components/Resume/ResumePreview";

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="card w-full lg:w-1/2 p-4 rounded-lg">
        <ResumeUploader />
      </div>
      <div className="card w-full lg:w-1/2 p-4 rounded-lg">
        <ResumePreview />
      </div>
    </div>
  );
}

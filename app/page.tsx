import ButtonPrimary from "./components/buttons/ButtonPrimary";
import { ArrowRight, ArrowLeft } from "lucide-react";
import AppointementStatusTag from "./components/tags/AppointementStatusTag";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#404040] space-y-10 pb-20">
      <div className="absolute top-0 left-0 p-4 text-white">
        Test Allaw - Vincent DESBROSSES
      </div>
      <div id="buttons" className="space-y-7">
        <ButtonPrimary
          startIcon={<ArrowRight />}
          endIcon={<ArrowRight />}
          label="Bouton"
        />
        <ButtonPrimary
          startIcon={<ArrowRight />}
          endIcon={<ArrowRight />}
          label="Bouton"
          disabled
        />
      </div>
      <div id="tags" className="flex flex-col items-start space-y-7">
        <AppointementStatusTag status="confirmed" />
        <AppointementStatusTag status="pending" />
        <AppointementStatusTag status="available" />
        <AppointementStatusTag status="unavailable" />
        <AppointementStatusTag status="cancelled" />
        <AppointementStatusTag status="passed" />
        <AppointementStatusTag status="refused" />
        <AppointementStatusTag status="confirmed" variant="big" />
        <AppointementStatusTag status="passed" variant="big" />
        <AppointementStatusTag status="cancelled" variant="big" />
      </div>
    </main>
  );
}

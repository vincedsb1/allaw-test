import ButtonPrimary from "./components/buttons/ButtonPrimary";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#404040]">
      <div className="space-y-10">
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
    </main>
  );
}

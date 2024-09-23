import Button from "@/components/button/Button";
import ButtonDanger from "@/components/button/ButtonDanger";
import ButtonInfo from "@/components/button/ButtonInfo";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonSuccess from "@/components/button/ButtonSuccess";
import ButtonWarning from "@/components/button/ButtonWarning";
import Card from "@/components/card/Card";
import Checkbox from "@/components/form/Checkbox";
import Input from "@/components/form/Input";
import Radio from "@/components/form/Radio";
import Select from "@/components/form/Select";
import Textarea from "@/components/form/Textarea";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-xl min-h-full 
        w-full md:w-10/12
        lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="p-10 text-center">
            <h1 className="text-4xl font-sans antialiased tracking-wider">
              <span className="font-extrabold underline">Twój</span>
              <strong className="text-indigo-600"> panel administracyjny</strong>
            </h1>
            <div className="my-5 antialiased">
              zbudowany za pomocą <strong>Tailwind CSS</strong> i <strong>Next.js</strong>
              <br />
              na podstawie książki <em>Tailwind CSS. Projektowanie stron WWW i podejście unity-first</em>, 
              <br />
              wydanej nakładem wydawnictwa Helion
            </div>
            <span className="separator-horizontal">
            </span>
            <div className="p-10 mb-5">
              <div className="flex flex-col"> 
                <h2 className="text-3xl">Nasze przyciski</h2>
                <div className="text-center my-5">
                  <Button>Przycisk bazowy</Button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <ButtonSuccess>Zapisz</ButtonSuccess>
                  <ButtonDanger>Usuń</ButtonDanger>
                  <ButtonInfo>Zobacz</ButtonInfo>
                  <ButtonPrimary>Edytuj</ButtonPrimary>
                  <ButtonWarning>Sprawdź</ButtonWarning>
                </div>
              </div>
            </div>
            <div className="p-10 my-5">
              <div className="flex flex-col">
                <h2 className="text-3xl mb-5">Pole formularza</h2>
                <div className="grid grid-cols-1 ld:grid-cols-3 fap-4 lg:gap-2 text-left space-y-4">
                  <Input label="Pole tekstowe" placeholder="Wprowadź krótki tekst" name="input"/>
                  <Select label="Lista rozwijana" name="select" options={[{'value': 1, 'text': 'Pierwsza opcja'}, {'value': 2, 'text': 'Druga opcja'}]}/>
                  <Textarea label="Pole tekstu rozszerzanego" placeholder="Wprowadź długi tekst" name="textarea" />
                  <Checkbox label="Wybierz tę opcję" name="checkbox" />
                  <Radio label="Zaznacz tę opcję" name="radio" />
                </div>
              </div>
            </div>
            <Card title="Sprawdź nasz szablon" className="text-x">
              <div className="flex justify-center space-x-2">
                <Link href="/auth/login" className="btn btn-success">
                  Zaloguj się
                </Link>
                <Link href="/auth/register" className="btn btn-primary">
                  Zarejstruj
                </Link>
              </div>
            </Card>
          </div>
      </div>
    </div>
  );
}

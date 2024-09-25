import ButtonPrimary from "@/components/button/ButtonPrimary";
import Card from "@/components/card/Card";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";

export default function Contact() {
  return (
    <DefaultLayout title="Formularz kontaktowy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Skontaktuj się z nami" className="grid grid-cols-1 gap-4">
          <Input placeholder="Krótko i na temat" label="Temat wiadomości"/>
          <Textarea placeholder="Napisz coś więcej" label="Treść wiadomości" rows={8}/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input placeholder="Przedstaw się" label="Imię i nazwisko"/>
            <Input placeholder="Twój email" label="Adres e-mail" type="email"/>
          </div>
          <div className="flex justify-end">
            <ButtonPrimary>
              Wyślij wiadomość
            </ButtonPrimary>
          </div>
        </Card>
        <Card title="Mapka poglądowa">
          <div className="h-[500px]">
            <iframe
              title="Mapka poglądowa"
              className="w-full h-full rounded-lg shadow border-none overflow-hidden m-0 p-0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.60318756103516%2C53.4737439613841%2C18.176536560058597%2C53.66213681473142&amp;layer=mapnik"/>
          </div>
        </Card>
      </div>
    </DefaultLayout>
  )
}
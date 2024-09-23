import Card from "@/components/card/Card";
import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import AppStatus from "@/components/ui/appStatus/AppStatus";
import Newsletter from "@/components/ui/newsletter/Newsletter";

export default function Index() {
  return (
    <DefaultLayout title="Panel administaratora">
      <Card title="Status" className="mb-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AppStatus/>
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="grid gap-4">
          <Newsletter
            title="Chcesz być na bierząco?"
            subTitle="Powiadomienia o naszych produktach trafią bezpośrednio na Twoją skrzynkę e-mail!"/>
        </section>
      </div>
    </DefaultLayout>
  )
}
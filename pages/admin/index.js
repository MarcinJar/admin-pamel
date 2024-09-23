import Card from "@/components/card/Card";
import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import AppStatus from "@/components/ui/appStatus/AppStatus";

export default function Index() {
  return (
    <DefaultLayout title="Panel administaratora">
      <Card title="Status" className="mb-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AppStatus/>
        </div>
      </Card>
    </DefaultLayout>
  )
}